const { MessageEmbed } = require("discord.js");
const wm = [
    'https://preview.redd.it/vsloetowir381.png?width=640&crop=smart&auto=webp&s=303628ebdbfc8f100889fb10cf059c04cbdbad24',
    'https://preview.redd.it/nogxn06t6en71.png?width=640&crop=smart&auto=webp&s=aa9b12070723c9bbd64fe323f96dd3a44cc658e6',
    'https://preview.redd.it/7081n6b6p0841.jpg?width=640&crop=smart&auto=webp&s=082fca5ceaa10bfb2198959b0a9637efec33c989',
    'https://preview.redd.it/4tw6v8mqe6481.jpg?width=640&crop=smart&auto=webp&s=5a615c0f049af307aa474e714c6a72bd00ee84fa',
    'https://i.redd.it/ckbh94gxf4t31.png'
]
module.exports = {
    name: "kde",
    aliases: ['plasma'],
    description: "Winter themed kde wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://preview.redd.it/nogxn06t6en71.png?width=640&crop=smart&auto=webp&s=aa9b12070723c9bbd64fe323f96dd3a44cc658e6") {

            creator = '[WhyIsThisAlreadyTake](https://www.reddit.com/user/WhyIsThisAlreadyTake/)'
            title = '[Plasma](https://www.reddit.com/r/unixporn/comments/pnvdaw/plasma_simple_nord_rice/)'
            dots = '[Dots](https://github.com/S4MUDR4-M/config)'

        }

        if (answer == "https://preview.redd.it/4tw6v8mqe6481.jpg?width=640&crop=smart&auto=webp&s=5a615c0f049af307aa474e714c6a72bd00ee84fa") {

            creator = 'https://www.reddit.com/user/FirewolfGB/'
            title = '[Plasma Old Nord setup, found the screenshots in my old drive and decided to post them!](https://www.reddit.com/r/unixporn/comments/rb81ah/plasma_old_nord_setup_found_the_screenshots_in_my/)'
            dots = 'None'

        }


        if (answer == "https://preview.redd.it/vsloetowir381.png?width=640&crop=smart&auto=webp&s=303628ebdbfc8f100889fb10cf059c04cbdbad24") {

            creator = '[Gullible Soil 6907](https://www.reddit.com/user/Gullible-Soil-6907/)'
            title = '[Plasma I love Plasma!](https://www.reddit.com/r/unixporn/comments/r9l588/plasma_i_love_plasma/)'
            dots = 'Regular Archcraft conf.'

        }

        if (answer == "https://i.redd.it/ckbh94gxf4t31.png") {

            creator = '[Gullible-Soil-6907](https://www.reddit.com/user/Gullible-Soil-6907/)'
            title = '[Plasma Winter is coming..](https://www.reddit.com/r/unixporn/comments/dj85cx/plasma_winter_is_coming/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/7081n6b6p0841.jpg?width=640&crop=smart&auto=webp&s=082fca5ceaa10bfb2198959b0a9637efec33c989") {

            creator = '[broadytheowl](https://www.reddit.com/user/broadytheowl/)'
            title = '[KDE Winter Plasma Land](https://www.reddit.com/r/unixporn/comments/ei7d7h/kde_winter_plasma_land/)'
            dots = 'None'

        }


        const KdeEmbed = new MessageEmbed()
            .setDescription(`${title}`)
            .addField('Creator', `${creator}`, true)
            .addField('Dots', `${dots}`, true)
            .setColor('WHITE')
            .setImage(answer)
        message.channel.send({ embeds: [KdeEmbed] });

    }
}