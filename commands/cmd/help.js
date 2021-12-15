const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "sudotree's commands!",
  execute(client, message, args) {
      const HelpCommandEmbed = new MessageEmbed()
      .setTitle('Commands <a:7546tree:918707577783717899>')
      .setDescription('**Window Managers**\n├── \`sudo bspwm\`\n├── \`sudo awesome\`\n├── \`sudo i3\`\n├── \`sudo kde\`\n├── \`sudo gnome\`\n├── \`sudo openbox\`\n\n**Every Winter Themed Rice.**\n├── \`sudo all\`\n')
    message.channel.send({ embeds: [HelpCommandEmbed] });
  }
};