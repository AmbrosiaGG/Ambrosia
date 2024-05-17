import chalk from "chalk";

  process.on("unhandledRejection", (reason, p) => {
    chalk.red("[AntiCrash] ") + chalk.red("UnhandledRejection : ", reason, " : ", p)
  });
  process.on("uncaughtException", (err, origin) => {
    chalk.red("[AntiCrash] ") + chalk.red("UncaughtException : ", origin, " : ", err)
  });
  process.on("uncaughtExceptionMonitor", (err, origin) => {
    chalk.red("[AntiCrash] ") + chalk.red("UncaughtExceptionMonitor : ", origin, " : ", err)
  });
  process.on("multipleResolves", (type, promise, reason) => {
    chalk.red("[AntiCrash] ") + chalk.red("UncaughtExceptionMonitor : ", type, " : ", promise, " : ", reason)
  });
