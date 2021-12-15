const { MessageEmbed } = require("discord.js");
const wm = [
    'https://preview.redd.it/fbujf6uszr381.png?width=960&crop=smart&auto=webp&s=8021602079fd62b9d22d5ba163f5894c4612899a',
    'https://preview.redd.it/rzaliegv76481.png?width=640&crop=smart&auto=webp&s=87f9a7e9875eafb8b71e0ca71859d7752eddf714',
    'https://preview.redd.it/91mrd6bfj3221.png?width=960&crop=smart&auto=webp&s=7b1d57bdf17495b921add541f41fef360e7256c4',
    'https://preview.redd.it/2gjrlgzt39381.png?width=640&crop=smart&auto=webp&s=588e05196dd4fced38cc6e33020defbedf3ed8a7',
    'https://preview.redd.it/umkcirx4vwrx.png?width=960&crop=smart&auto=webp&s=8dfea6104711c3f0275d2ccd5850f937033e887b',
    'https://i.redd.it/yx8zrzcmx1261.png',
]
module.exports = {
    name: "i3",
    aliases: ['gaps', 'i3wm', 'i3gaps'],
    description: "Winter themed i3 wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://preview.redd.it/fbujf6uszr381.png?width=960&crop=smart&auto=webp&s=8021602079fd62b9d22d5ba163f5894c4612899a") {
            creator = '[qlegunnec](https://www.reddit.com/user/qleguennec/)'
            title = '[i3gaps picom with blur effect, doom emacs with transparent background, and polybar](https://www.reddit.com/r/unixporn/comments/r9naf6/i3gaps_picom_with_blur_effect_doom_emacs_with/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/rzaliegv76481.png?width=640&crop=smart&auto=webp&s=87f9a7e9875eafb8b71e0ca71859d7752eddf714") {
            creator = '[Blotmath](https://www.reddit.com/user/Blothmath/)'
            title = '[i3wm Current state of my Nord rice, might as well share it before i redo everything again](https://www.reddit.com/r/unixporn/comments/rb78ig/i3wm_current_state_of_my_nord_rice_might_as_well/)'
            dots = 'None'
        }

        if (answer == "https://preview.redd.it/2gjrlgzt39381.png?width=640&crop=smart&auto=webp&s=588e05196dd4fced38cc6e33020defbedf3ed8a7") {
            creator = '[ronasimi](https://www.reddit.com/user/ronasimi/)'
            title = '[i3-gaps My minimal but comfortable daily driver.](https://www.reddit.com/r/unixporn/comments/r7pvbc/i3gaps_my_minimal_but_comfortable_daily_driver/)'
            dots = 'https://github.com/ronasimi/dotfiles'
        }

        if (answer == "https://i.redd.it/yx8zrzcmx1261.png") {
            creator = '[itisBC](https://www.reddit.com/user/Vista1nik/)'
            title = '[i3-gaps Waiting for winter](https://www.reddit.com/r/unixporn/comments/57ty5a/i3gaps_waiting_for_winter/)'
            dots = 'https://github.com/Vista1nik/i3-winter2020'
        }

        if (answer == "https://preview.redd.it/umkcirx4vwrx.png?width=960&crop=smart&auto=webp&s=8dfea6104711c3f0275d2ccd5850f937033e887b") {
            creator = '[itisBC](https://www.reddit.com/user/itisBC/)'
            title = '[Winter is coming...](https://www.reddit.com/r/unixporn/comments/k2wgxb/i3gaps_winter_is_coming/)'
            dots = 'https://github.com/PatDan/dotfiles'
        }

        if (answer == "https://preview.redd.it/91mrd6bfj3221.png?width=960&crop=smart&auto=webp&s=7b1d57bdf17495b921add541f41fef360e7256c4") {
            creator = '[DELETED](hhttps://www.reddit.com/user/[deleted]/)'
            title = '[i3-gaps Icy rice for my warm Florida winter.](https://www.reddit.com/r/unixporn/comments/a2qp3d/i3gaps_icy_rice_for_my_warm_florida_winter/)'
            dots = 'None'
        }

        const i3Embed = new MessageEmbed()
            .setDescription(`${title}`)
            .addField('Creator', `${creator}`, true)
            .addField('Dots', `${dots}`, true)
            .setColor('WHITE')
            .setImage(answer)
        message.channel.send({ embeds: [i3Embed] });

    }
}