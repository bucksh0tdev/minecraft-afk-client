const logger = require("node-color-log");

const start = async() => {
    await logger.fontColorLog("cyan", `Started Inelity Afk Client V1!`, { bold: true });
    require("./functions/bot.js")();
}

start();