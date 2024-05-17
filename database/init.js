const mongoose = require('mongoose')
import chalk from 'chalk';
mongoose.connect(process.env.clusterurl).then( () => {
        console.log(chalk.yellow('[MongoDB] ') + chalk.green('Connected SuccessFully'))
}
).catch( (error) => {
        console.log(chalk.yellow('[MongoDB] ') + chalk.red('Connection Failed (Errored)'))
})