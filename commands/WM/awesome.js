const { MessageEmbed } = require("discord.js");
const wm = [
    'https://preview.redd.it/nm1db80tutp71.png?width=960&crop=smart&auto=webp&s=9f33fe9be4d768f932bda0fd68ea233b5967db79',
    'https://preview.redd.it/5x632fd83ba71.png?width=960&crop=smart&auto=webp&s=5679e36d00c52a71a591161498b7c33d314b9743',
    'https://preview.redd.it/mb9vt43shkyx.png?width=960&crop=smart&auto=webp&s=fe3eeba211bf2dd875a1bf9f39697537354bbfd2',
]
module.exports = {
    name: "awesome",
    aliases: ['a'],
    description: "Winter themed awesome wm rice",
    execute(client, message, args) {
        let answer = wm[Math.floor(Math.random() * wm.length)]

        if (answer == "https://preview.redd.it/nm1db80tutp71.png?width=960&crop=smart&auto=webp&s=9f33fe9be4d768f932bda0fd68ea233b5967db79") {
            creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
            title = '[Awesomewm Minimal](https://www.reddit.com/r/unixporn/comments/pvrjbh/awesomewm_minimal/)'
            dots = 'None'

        }

        if (answer == "https://preview.redd.it/5x632fd83ba71.png?width=960&crop=smart&auto=webp&s=5679e36d00c52a71a591161498b7c33d314b9743") {
            creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
            title = '[OC AwesomeWM Concept](https://www.reddit.com/r/unixporn/comments/ohb9y9/oc_awesomewm_concept/)'
            dots = 'Concept'
        }

        if (answer == "https://preview.redd.it/mb9vt43shkyx.png?width=960&crop=smart&auto=webp&s=fe3eeba211bf2dd875a1bf9f39697537354bbfd2") {
            creator = '[KotFedot](https://www.reddit.com/user/KotFedot/)'
            title = '[awesome Winter Blue](https://www.reddit.com/r/unixporn/comments/5ds6jf/awesome_winter_blue/)'
            dots = 'None'
        }

        const AwesomeEmbed = new MessageEmbed()
            .setDescription(`${title}`)
            .addField('Creator', `${creator}`, true)
            .addField('Dots', `${dots}`, true)
            .setColor('WHITE')
            .setImage(answer)
        message.channel.send({ embeds: [AwesomeEmbed] });

    }
}