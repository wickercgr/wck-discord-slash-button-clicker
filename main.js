const { JsonDatabase } = require("wio.db");
const db = new JsonDatabase("db");
const { Client } = require('discord.js-selfbot-v13');
const uptime = require("moment");
const chalk = require("chalk");
const fs = require("fs");
require("moment-duration-format");
const util = require('util');
const origConsoleLog = console.log;

console.log = function () {
  const now = new Date();
  const options = {
    timeZone: 'Europe/Istanbul',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const formattedDate = chalk.rgb(51, 255, 153)('[' + now.toLocaleString('tr-TR', options) + ']');
  const args = Array.from(arguments);
  args.unshift(formattedDate);
  origConsoleLog.apply(console, args);
};
// LICENSE CONTROL

let control = 1

setTimeout(async function () {
if (control == 1) {
  time = Date.now()
  const totaltoken = fs.readFileSync('tokens.txt', 'utf-8').split('\r\n').filter(Boolean);
  // PROCESS ON
  let buildnumber = (Math.random() + 1).toString(8).substring(13);
  console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Script Version ") + chalk.red("2.0.0 ") + chalk.green("[+] "));
  console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Loaded ") + chalk.green(totaltoken.length) + chalk.rgb(230, 184, 0)(" Tokens ") + chalk.green("[+] "));
  console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Status ") + chalk.green("[+] "));
  console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("Build Number ") + chalk.green("[" + (buildnumber) + "]"));
  console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("MS ") + chalk.green("[" + (Date.now() - time) + "]"));

  async function loginTokens() {
    const tokens = fs.readFileSync('tokens.txt', 'utf-8').split('\r\n').filter(Boolean);
    for (let i = 0; i < tokens.length; i++) {
      const client = new Client({
        checkUpdate: false,
      });

      client.on('ready', async () => {
        console.log("");
  	    console.log(chalk.rgb(51, 119, 255)("[TOKEN] ") + chalk.rgb(204, 51, 153)("NAME ") + chalk.rgb(230, 184, 0)(`${client.user.tag}`));
        console.log(chalk.rgb(51, 119, 255)("[TOKEN] ") + chalk.rgb(204, 51, 153)("ID ") + chalk.rgb(230, 184, 0)(`${client.user.id}`));
        console.log(chalk.rgb(51, 119, 255)("[TOKEN] ") + chalk.rgb(204, 51, 153)("NUMBER ") + chalk.rgb(230, 184, 0)(i));
        console.log(chalk.rgb(51, 119, 255)("[TOKEN] ") + chalk.rgb(204, 51, 153)("STATUS ") + chalk.green("+"));
        console.log(chalk.rgb(51, 119, 255)("[TOKEN] ") + chalk.rgb(204, 51, 153)("GUILD COUNT ") + chalk.green(`${client.guilds.cache.size}`));
        console.log("");

        let guildcount = `${client.guilds.cache.size}`;
        if (guildcount > 0) {
            
            const message = await client.channels.fetch(db.get("channel-id")).then(channel => channel.messages.fetch(db.get("message-id")));

            if (message.embeds[0]?.description?.includes(db.get("desc-inf"))) {
                  await message.clickButton();
                  console.log(chalk.rgb(51, 119, 255)("[AI] ") + chalk.rgb(230, 184, 0)(`SLASH PRESS BUTTON PROCESS `) + chalk.green(' [+]'));
            }
        } else {
          console.log(chalk.red("[GUILD COUNT] ") + chalk.rgb(230, 184, 0)("The guild count value was deemed invalid when logged into the account. Switched to the number ") + chalk.rgb(230, 184, 0)(i) + chalk.rgb(230, 184, 0)(" token.") + chalk.red(` [-]`));
        }

      });

      try {
        await new Promise(resolve => setTimeout(resolve, db.get("delay") * 1000)); // token delay
        await client.login(tokens[i]);
      } catch (err) {
        console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("HAVE TOKEN ERROR! ") + chalk.red("[.] "));
        console.log(chalk.green("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("RETRY TO PROCESS ") + chalk.green("[+] "));
      }
    }
  }

  loginTokens();
}
}, 6000)

process.on('unhandledRejection', err => {
    console.log(err)
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("GET UNKNOWN ERROR, SCRIPTY RETRYING"));
    console.log("")
    console.log(chalk.red("[WCK SCRIPT] ") + chalk.rgb(230, 184, 0)("RETRYING PROCESS") + chalk.green(" [+]"));
});
