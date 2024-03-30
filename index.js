const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
import { env } from 'bun';
import chalk from 'chalk';
const path = require('path')
const fs = require('fs')
const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const PORT = process.env.PORT || 3341 // Uselessness of packages
/* ==== Pulled from https://stackoverflow.com/questions/11744975/enabling-https-on-express-js ==== */
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('webcert/ssl.key', 'utf8');
var certificate = fs.readFileSync('webcert/ssl.crt', 'utf8');
var credentials  = {
  key: privateKey,
  cert: certificate
}; // WANT FUCKING HTTPS???
/* ======== */
const app = express() // You need this, Else you'd be fucked

require('./utilities/FortKNOX')

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.use(connectLiveReload());
app.use(require('cors')())
app.set("view engine", require('ejs'))
app.use(cookieParser());
app.use(session({
  secret: process.env.session_sercret, // Leaky Leaky
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.mongoose }) // Store Sessions For Hijacking hehehe
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './temp'
})); // Never even got to use this
app.use("/api", require('./routers/api')) // Peak ducky
app.use("", require('./routers/index')) // For / Route 
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))) // Nice security vuln's
// That would't work
// app.use('/api/user', express.static(path.join(__dirname, 'avatars')))
// 

// Testing Section!!!!$

// Note All The Tests
// Custom Domains
  // const cds = require('./nginx/index')
  // console.log( await cds.proxyDomain("gitlab.novabot.gg", "192.168.1.11", "32769")) // Finally works! Heheheheh
  // ^ That took 3 hours

// Testing Section!!!!#


// Handlers
require('./cronjobs/listener') // Listen for my screams of aggony
require('./mongoose/init')
require('./utilities/updater.js') // Update the broken code | Spoiler: it doesn't work
if (fs.existsSync('updating.env')) {
  fs.rename('updating.env', '.env', () => { 
    console.log("\n Update Finished! If Settings are broken contact support! \n"); // Update finished, I wanna die.
  }); 
}

app.use((req, res, next) => {
  res.status(404).render(__dirname+'/views/errors/duckrender404.ejs', {
    
  })
}) // 404 Duck not found


// HTTP(s) Configurations
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app); // i should delete

/*
httpServer.listen(3341, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green("HTTP WS Running on port:", 3341))
});
httpsServer.listen(3342, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green("HTTP(S) WS Running on port:", 3342))
});
*/
// decided https is fucked 

app.listen(3341, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green("HTTP WS Running on port:", 3341))
})