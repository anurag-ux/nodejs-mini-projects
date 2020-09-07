const chalk=require("chalk");
const { captureRejectionSymbol } = require("events");
const log=console.log;

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));