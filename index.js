const cluster = require("node:cluster");
const http = require("node:http");
const numCPUs = require("node:os").availableParallelism();
const process = require("node:process");
global.log = require("./utilities/logger.js");

if (cluster.isPrimary) {
  global.log(`worker`, `Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const Sentry = require('@sentry/node')
  Sentry.init({
    dsn: "https://de24dffab5667a6b83e5ca7c88d6b78c@sentry.ambrosia.gg/2",
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Sentry.Integrations.Express({ app }),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
  });



  const express = require("express");
  const bodyParser = require("body-parser");
  const session = require("express-session");
  const fileUpload = require("express-fileupload");
  const MongoStore = require("connect-mongo");
  const rateLimit = require('express-rate-limit');
  const compression = require('compression');
  const config = require('./configurations/config.js')
  const app = express();

  const path = require("path");

  /* Middle Mans~ */
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: config.secrets.session_secret,
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({ mongoUrl: config.secrets.database_mongodb }),
    })
  );

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());

  app.set('view cache', true);
  app.set('etag', 'strong');
  app.set('views', './views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-engine-jsx'));


  app.use(require("cors")());
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "./CDN/TMP",
      limits: { fileSize: 100 * 1024 * 1024 }, // 50 * 1024 * 1024 = 52428800 AKA 50 mebibyte
    })
  );
  const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
  });
  app.use(limiter);

  /* Routers */
  app.use("/cdn", express.static(path.join(__dirname, "CDN")));
  app.use("/assets", express.static(path.join(__dirname, "assets")));
  app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
  app.use("", require("./routers/main.js")); // Weird Express Shit for / Routes
  app.use("/admin", require("./routers/admin.js"));
  app.use("/api", require("./routers/api.js"));
  app.use("/guides", require("./routers/guides.js"));
  app.use("/blogs", require("./routers/blogs.js"));

  /* Global Imports */
  global.db = require("./utilities/quickdb.js");
  global.oauth2_discord = require("./utilities/oauth2_discord.js");
  global.stringGen = require("./utilities/stringGen.js");
  global.webhook = require('./utilities/webhooker.js')


  /* i love ip's */
  app.use(async (req, res, next) => {
    global.log("info", "A Request was made! Handled by: " + process.pid);
    await global.db("day").add("views", 1);
    await global.db("week").add("views", 1);
    await global.db("month").add("views", 1);
    await global.db("year").add("views", 1);
    const { PresenceUpdateStatus, ActivityType } = require("discord.js");
    global.discord.user.setStatus(PresenceUpdateStatus.Online);
    setTimeout(() => {
      global.discord.user.setStatus(PresenceUpdateStatus.Idle);
    }, 5000);
    next();
  });

  const { MongoClient } = require('mongodb');
  const os = require('os');

  app.get("/api/health", async (req, res) => {
    const serverPackage = require(process.cwd() + '/package.json');
    const getRepoInfo = require('git-repo-info');
    const client = new MongoClient(process.env.mongoose, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const admin = client.db().admin();
    const pidusage = require('pidusage');
    console.log(await admin.serverStatus())
    const cpuUsage = await new Promise((resolve, reject) => {
      pidusage(process.pid, (err, stats) => {
        if (err) reject(err);
        resolve(stats);
      });
    });
    const gitInfo = getRepoInfo();
    const statuss = await admin.serverStatus();

    const memoryUsage = process.memoryUsage();
    let status = {
      status: 'OK',
      uptime: process.uptime(),
      upSince: global.startTime,
      localTime: new Date(),
      service: {
        name: serverPackage.name,
        description: serverPackage.description,
        version: serverPackage.version,
        cpu: {
          percent: cpuUsage.cpu.toFixed(2) // CPU usage percentage
        },
        memory: {
          current: (memoryUsage.rss / (1024 * 1024)).toFixed(2) + ' MB', // Current Memory Usage
          totalAllocated: (memoryUsage.heapTotal / (1024 * 1024)).toFixed(2) + ' MB', // Total Memory Allocated
          obtained: (memoryUsage.heapUsed / (1024 * 1024)).toFixed(2) + ' MB', // Memory Obtained
          allocations: memoryUsage.heapTotal, // Memory Allocations (in bytes)
          frees: memoryUsage.heapUsed // Memory Frees (in bytes)
        }
      },
      mongodb: {
        up: await admin.ping(),
        serverStatus: {
          version: statuss.version,
          uptime: statuss.uptime,
          connections: statuss.connections,
          metrics: statuss.metrics
        }
      },
      env: {
        nodeEnv: process.env.NODE_ENV,
        nodeVersion: process.version,
        processName: process.title,
        pid: process.pid,
        cwd: process.cwd(),
      },
      git: {
        commitHash: gitInfo.sha,
        branchName: gitInfo.branch,
        tag: gitInfo.tag,
      },
    };

    res.json(status);
  });

  app.use((req, res, next) => {
    res.status(404).render(__dirname + "/views/errors/cantFind.ejs")
  })

  app.listen(config.webserver.port, () => {
    global.log("info", "Listening on the port " + config.webserver.port);
    require("./src/init.js");
    global.startTime = new Date();
  });
  global.log(`worker`, `Worker ${process.pid} started`);
}
