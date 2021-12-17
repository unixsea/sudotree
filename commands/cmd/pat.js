const { MessageEmbed } = require("discord.js")

const names = ["loom", "bun", "nicole", "iara", "nom", "scoopy", "chewy", "burbur", "magma", "oliy", "null", "misty" ]
const gifs = ["https://c.tenor.com/2kmDRTqIIDAAAAAM/kitty-so-cute-head-pat.gif", "https://c.tenor.com/E6fMkQRZBdIAAAAC/kanna-kamui-pat.gif", "https://c.tenor.com/1I1pGUd3xWkAAAAM/mala-mishra-jha-pat-head.gif", "https://c.tenor.com/AZ1mlSh-fT8AAAAi/pat-duck.gif", "https://c.tenor.com/BMejCjtrWs0AAAAC/pat-good-boy.gif"]
module.exports = {
    name: "pats",
    aliases: ['qt'],
    description: "lil easter egs",
    execute(client, message, args) {
        let pats = names[Math.floor(Math.random() * names.length)]
        let gifers = gifs[Math.floor(Math.random() * gifs.length)]
        const PatsEmbed = new MessageEmbed()
        .setDescription(`${pats} is a qt!`)
        .setImage(`${gifers}`)
        .setColor('WHITE')
         message.reply({ embeds: [PatsEmbed] });
    }

}


//Hi <3