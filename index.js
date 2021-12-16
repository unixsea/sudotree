// Defining Discord
const Discord = require("discord.js");
const { Collection } = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require("fs");
client.commands = new Collection();
client.events = new Collection();
["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});
client.login("IDgith");
