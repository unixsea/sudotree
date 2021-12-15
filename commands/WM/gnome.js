const { MessageEmbed } = require("discord.js");
const wm = [
    'https://i.redd.it/4s2cvdz1b6381.jpg',
    'https://preview.redd.it/6jjdcru8q0b41.png?width=960&crop=smart&auto=webp&s=9cd7f56caa86aad45786c9b21476b1aa954a904e',
    'https://preview.redd.it/oe74t3ejrd641.png?width=960&crop=smart&auto=webp&s=a00dd8f1087c6585b453244ce694220e03ef16cb',
]
module.exports = {
    name: "gnome",
    aliases: [],
    description: "Winter themed gnome wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://i.redd.it/qdp1i3ppbrq61.png") {
            creator = '[Weblon](https://www.reddit.com/user/Weblon/)'
            title = '[GNOME Winter time](https://www.reddit.com/r/unixporn/comments/mijqeb/gnome_winter_time/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/6jjdcru8q0b41.png?width=960&crop=smart&auto=webp&s=9cd7f56caa86aad45786c9b21476b1aa954a904e") {
            creator = '[MrChrobok](https://www.reddit.com/user/MrChrobok/)'
            title = '[GNOME Ubuntu 18.04.3 - Winter White](https://www.reddit.com/r/unixporn/comments/ep9lg7/gnome_ubuntu_18043_winter_white/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/oe74t3ejrd641.png?width=960&crop=smart&auto=webp&s=a00dd8f1087c6585b453244ce694220e03ef16cb") {
            creator = '[warhammer327](https://www.reddit.com/user/warhammer327/)'
            title = '[GNOME Warm winter](https://www.reddit.com/r/unixporn/comments/eekclo/gnome_warm_winter/)'
            dots = 'None'

        }


        const BspwmEmbed = new MessageEmbed()
        .setDescription(`${title}`)
        .addField('Creator', `${creator}`, true)
        .addField('Dots', `${dots}`, true)
        .setColor('WHITE')
        .setImage(answer)
    message.channel.send({ embeds: [BspwmEmbed] });


    }
}