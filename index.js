const Sentry = require('@sentry/node');
Sentry.init({
  dsn: "https://2f0aae79537a6b41f3e0ceb5eb82a6ce@o4507255465508864.ingest.de.sentry.io/4507255471276112",
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
});

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

import chalk from 'chalk';

const path = require('path')
const MongoStore = require('connect-mongo');

const PORT = process.env.PORT || 3341

const app = express()

Sentry.setupExpressErrorHandler(app);


app.use(require('cors')())
app.set("view engine", require('ejs'))
app.use(session({
  secret: process.env.session, 
  resave: true,
  saveUninitialized: false,
 store: MongoStore.create({ mongoUrl: process.env.clusterurl })
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

app.use("/api", require('./routers/api'))
app.use("", require('./routers/index')) // For / Route 
app.use("/dashboard", require('./routers/dashboard')) // For / Route 
app.use('/assets', express.static(path.join(__dirname, 'assets')))



app.listen(PORT, () => {
  console.log(chalk.blue("[EXPRESS]") + chalk.green(" Running on port:", PORT))
})

require('./loader.js')

