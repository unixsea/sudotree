const { MessageEmbed } = require("discord.js");
const wm = [
    'https://external-preview.redd.it/Yf39H-JpRxScbfp7mPnpDezCIhrSBO_sEU5Xkiiojp0.png?width=960&crop=smart&auto=webp&s=255201cb55e0740a32f5c81a730fc112cfee80dd',
    'https://preview.redd.it/dwgr4sqb3zt41.png?width=640&crop=smart&auto=webp&s=c7009a51f04ec7b29f40e8241ffb63f84a7ae755',
    'https://preview.redd.it/qjjl72l1zpd21.png?width=960&crop=smart&auto=webp&s=f1db6b9bf784643a89135553b638f3ac1c8aaa68'
]
module.exports = {
    name: "openbox",
    aliases: ["ob"],
    description: "Winter themed openbox wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://external-preview.redd.it/Yf39H-JpRxScbfp7mPnpDezCIhrSBO_sEU5Xkiiojp0.png?width=960&crop=smart&auto=webp&s=255201cb55e0740a32f5c81a730fc112cfee80dd") {
            creator = '[peryyyy](https://www.reddit.com/user/perryyyy/)'
            title = '[Openbox winter vibes](https://www.reddit.com/r/unixporn/comments/3qwzf1/openbox_winter_vibes/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/dwgr4sqb3zt41.png?width=640&crop=smart&auto=webp&s=c7009a51f04ec7b29f40e8241ffb63f84a7ae755") {
            creator = '[s0la90](https://www.reddit.com/user/s0la90/)'
            title = '[Openbox ORW Born In Winter](hhttps://www.reddit.com/r/unixporn/comments/g4sk5y/openbox_orw_born_in_winter/)'
            dots = 'https://github.com/s0la/orw'

        }

        if (answer == "https://preview.redd.it/qjjl72l1zpd21.png?width=960&crop=smart&auto=webp&s=f1db6b9bf784643a89135553b638f3ac1c8aaa68") {
            creator = '[edskeye](https://www.reddit.com/user/edskeye/)'
            title = '[openbox dark winter](https://www.reddit.com/r/unixporn/comments/alnj0h/openbox_dark_winter/)'
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