const mineflayer = require("mineflayer");
const logger = require("node-color-log");
const config = require("../config.js");
module.exports = async() => {
    let bot = mineflayer.createBot({
        host: config?.server?.ip,
        username: config?.name,
        port: config?.server?.port,
        version: config?.server?.version,
        hideErrors: true
    });

    /* Start Bot */
    bot.once("login", async () => {
        try {
            await logger.fontColorLog("green", `Logged Inelity Afk Client V1!`, { bold: true });

            for(var instruction of config.instructions) {
                await logger.fontColorLog("cyan", `Instruction (${instruction?.name}) Executed!`, { bold: true });

                if(instruction?.type == 1) {
                    await new Promise(async(res) => { setTimeout(() => { res() }, instruction?.wait) });
                    bot.chat(instruction?.value);
                } else if(instruction?.type == 2) {
                    await new Promise(async(res) => { setTimeout(() => { res() }, 3000) });
                    bot.setControlState("forward", true);
                    await new Promise(async(res) => { setTimeout(() => { res() }, 1500) });
                    bot.setControlState("forward", false);
                    setInterval(() => {
                        bot.chat(instruction.value[Math.floor(Math.random() * instruction.value.length)]);
                    }, instruction?.wait);
                }
            }
        } catch(err) {
            err + "1";
            await logger.fontColorLog("red", `ERROR Inelity Afk Client V1!`, { bold: true });
            process.exit(1);
        }

    });

    if(config.log)
    bot.on("message", (te) => console.log(te.toString()));
};