import chalk from "chalk";

const fs = require("fs");

function doEnvCheck() {
  let file = ".env";
  if (fs.lstatSync(file).isDirectory()) {
    console.log(
      chalk.gray("[.ENV] ") +
        chalk.red(".ENV is a directory, it should be a file!")
    );
  }
  if (fs.existsSync(file)) {
    console.log(chalk.gray("[.ENV] ") + chalk.green(".ENV Found, loaded"));
    require('./database/init')
  } else {
    console.log(
      chalk.gray("[.ENV] ") + chalk.red(".ENV missing! Did you add it?")
    );
    try {
      fs.writeFileSync(
        "./.env",
        `
         session=""
         clusterurl=""        
        `
      );
      console.log(
        chalk.yellow("[FS] ") + chalk.green("File .ENV created and written")
      );
    } catch (err) {
      console.log(
        chalk.yellow("[FS] ") +
          chalk.red("File .ENV failed to be created and written")
      );
    }
  }
}

// function doFileCheck() {
// 
// }

console.log(chalk.blue("[========= Ambrosia Web-Refresh =========]"));
doEnvCheck()
require('./utilities/antiCrash')
console.log(
  chalk.blue("[Sentry] ") +
    chalk.green("Sentry has been initiated")
);