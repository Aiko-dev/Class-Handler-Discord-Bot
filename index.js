const Client = require("./struct/Client");
const Discord = require('discord.js')
const Intents = Discord.Intents.FLAGS;
const client = new Client({
    config : './config',
    ws: {
        intents: [
            Intents.GUILDS,
        ],
      },
});
client.login(client.config.token);
client.loadCommands('./commands'); 
client.loadEvents('./events');
