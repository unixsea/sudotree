const { MessageEmbed } = require("discord.js");
const wm = [
    'https://i.redd.it/4s2cvdz1b6381.jpg',
    'https://preview.redd.it/gnvukt5u76271.png?width=640&crop=smart&auto=webp&s=2871329c079bb6761532a82ffc0aadcaf0635415',
    'https://preview.redd.it/u7qpbpuopu121.png?width=960&crop=smart&auto=webp&s=ab009294fb86bf4baa9111b6c093e36364063b80'
]
module.exports = {
    name: "bspwm",
    aliases: [],
    description: "Winter themed bspwm wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://i.redd.it/4s2cvdz1b6381.jpg") {
            creator = '[pau1rw](https://www.reddit.com/user/pau1rw/)'
            title = '[BSPWM Ive been working on my Daily Driver, Im calling this it Polar Winter - my wife still doesnt care.](https://www.reddit.com/r/unixporn/comments/r9naf6/i3gaps_picom_with_blur_effect_doom_emacs_with/)'
            dots = 'https://github.com/prdanelli/dotfiles'

        }

        if (answer == "https://preview.redd.it/gnvukt5u76271.png?width=640&crop=smart&auto=webp&s=2871329c079bb6761532a82ffc0aadcaf0635415") {
            creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
            title = '[Bspwm Dark Theme](https://www.reddit.com/r/unixporn/comments/no1we8/bspwm_dark_theme/)'
            dots = 'Deleted.'

        }

        if (answer == "https://preview.redd.it/u7qpbpuopu121.png?width=960&crop=smart&auto=webp&s=ab009294fb86bf4baa9111b6c093e36364063b80") {
            creator = '[LeD3F](https://www.reddit.com/user/LeD3F/)'
            title = '[Bspwm Winter](https://www.reddit.com/r/unixporn/comments/a2ckss/bspwm_winter/)'
            dots = 'https://github.com/LeD3F/dots'

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