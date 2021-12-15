const { inspect } = require("util");
const prefix = "sudo ";

module.exports = async (Discord, client, message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).split(/\s+/);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  if (!command) {
    const commandNotFoundEmbed = new Discord.MessageEmbed()
       .setColor(
         "WHITE"
         )
      .setDescription(
        `\`that command does not exist\`\n├── You sleighed down the wrong road!`
      )
      .setTimestamp();
    
    return message.channel.send({ embeds: [commandNotFoundEmbed] });
  }
  
  if (command) {
    try {
      await command.execute(client, message, args, Discord);
    } catch (err) {
      const errorEmbed = new Discord.MessageEmbed()
        .setTitle(
          "The bot sleighed down the wrong road!"
        )
        .setDescription(
          `\`\`\`js\n${inspect(err)}\`\`\``
        )
        .setFooter(
          'An error occured!'
        )
        .setTimestamp();
      message.channel.send({ embeds: [errorEmbed] });
    }
  }

};