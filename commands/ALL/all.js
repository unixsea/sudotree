const { MessageEmbed } = require("discord.js");
const distros = [
  'https://preview.redd.it/5x632fd83ba71.png?width=960&crop=smart&auto=webp&s=5679e36d00c52a71a591161498b7c33d314b9743',
  'https://preview.redd.it/4tw6v8mqe6481.jpg?width=640&crop=smart&auto=webp&s=5a615c0f049af307aa474e714c6a72bd00ee84fa',
  'https://preview.redd.it/rzaliegv76481.png?width=640&crop=smart&auto=webp&s=87f9a7e9875eafb8b71e0ca71859d7752eddf714',
  'https://preview.redd.it/jdwdagtdec481.png?width=640&crop=smart&auto=webp&s=3cca28dd3c968c34366bae1ba47ae3e7641b2c66',
  'https://preview.redd.it/nogxn06t6en71.png?width=640&crop=smart&auto=webp&s=aa9b12070723c9bbd64fe323f96dd3a44cc658e6',
  'https://preview.redd.it/nm1db80tutp71.png?width=960&crop=smart&auto=webp&s=9f33fe9be4d768f932bda0fd68ea233b5967db79',
  'https://preview.redd.it/gnvukt5u76271.png?width=640&crop=smart&auto=webp&s=2871329c079bb6761532a82ffc0aadcaf0635415',
  'https://preview.redd.it/7081n6b6p0841.jpg?width=640&crop=smart&auto=webp&s=082fca5ceaa10bfb2198959b0a9637efec33c989',
  'https://i.redd.it/4s2cvdz1b6381.jpg',
  'https://i.redd.it/ckbh94gxf4t31.png',
  'https://preview.redd.it/6jjdcru8q0b41.png?width=960&crop=smart&auto=webp&s=9cd7f56caa86aad45786c9b21476b1aa954a904e',
  'https://preview.redd.it/u7qpbpuopu121.png?width=960&crop=smart&auto=webp&s=ab009294fb86bf4baa9111b6c093e36364063b80',
  'https://preview.redd.it/oe74t3ejrd641.png?width=960&crop=smart&auto=webp&s=a00dd8f1087c6585b453244ce694220e03ef16cb',
  'https://preview.redd.it/2gjrlgzt39381.png?width=640&crop=smart&auto=webp&s=588e05196dd4fced38cc6e33020defbedf3ed8a7',
  'https://i.redd.it/2vaf7sg02y471.png',
  'https://i.redd.it/4s2cvdz1b6381.jpg',
  'https://i.redd.it/yx8zrzcmx1261.png',
]
module.exports = {
  name: "all",
  description: "All of the winter themed distros",
  execute(client, message, args) {
    let answer = distros[Math.floor(Math.random() * distros.length)]

    if (answer == "https://preview.redd.it/jdwdagtdec481.png?width=640&crop=smart&auto=webp&s=3cca28dd3c968c34366bae1ba47ae3e7641b2c66") {

      creator = 'https://www.reddit.com/user/Demusnotfound/'
      title = '[sway] Classic Nord'
      post = 'https://www.reddit.com/r/unixporn/comments/rbul5m/sway_classic_nord/'
      dots = ' https://github.com/demus07/sway-dots'
    }

    if (answer == "https://preview.redd.it/7081n6b6p0841.jpg?width=640&crop=smart&auto=webp&s=082fca5ceaa10bfb2198959b0a9637efec33c989") {

      creator = '[broadytheowl](https://www.reddit.com/user/broadytheowl/)'
      title = '[KDE Winter Plasma Land](https://www.reddit.com/r/unixporn/comments/ei7d7h/kde_winter_plasma_land/)'
      dots = 'None'

    }

    if (answer == "https://preview.redd.it/rzaliegv76481.png?width=640&crop=smart&auto=webp&s=87f9a7e9875eafb8b71e0ca71859d7752eddf714") {

      creator = 'https://www.reddit.com/user/Blothmath/'
      title = '[i3wm] Current state of my Nord rice, might as well share it before i redo everything again'
      post = 'https://www.reddit.com/r/unixporn/comments/rb78ig/i3wm_current_state_of_my_nord_rice_might_as_well/'
      dots = 'None'
    }

    if (answer == "https://preview.redd.it/4tw6v8mqe6481.jpg?width=640&crop=smart&auto=webp&s=5a615c0f049af307aa474e714c6a72bd00ee84fa") {

      creator = 'https://www.reddit.com/user/FirewolfGB/'
      title = '[Plasma Old Nord setup, found the screenshots in my old drive and decided to post them!](https://www.reddit.com/r/unixporn/comments/rb81ah/plasma_old_nord_setup_found_the_screenshots_in_my/)'
      dots = 'None'
    }

    if (answer == "https://preview.redd.it/5x632fd83ba71.png?width=960&crop=smart&auto=webp&s=5679e36d00c52a71a591161498b7c33d314b9743") {

      creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
      title = '[OC AwesomeWM Concept](https://www.reddit.com/r/unixporn/comments/ohb9y9/oc_awesomewm_concept/)'
      dots = 'Concept'

    }

    if (answer == "https://preview.redd.it/nm1db80tutp71.png?width=960&crop=smart&auto=webp&s=9f33fe9be4d768f932bda0fd68ea233b5967db79") {

      creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
      title = '[Awesomewm Minimal](https://www.reddit.com/r/unixporn/comments/pvrjbh/awesomewm_minimal/)'
      dots = 'None'

    }

    if (answer == "https://i.redd.it/qdp1i3ppbrq61.png") {
      creator = '[Weblon](https://www.reddit.com/user/Weblon/)'
      title = '[GNOME Winter time](https://www.reddit.com/r/unixporn/comments/mijqeb/gnome_winter_time/'
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

    if (answer == "https://preview.redd.it/nogxn06t6en71.png?width=640&crop=smart&auto=webp&s=aa9b12070723c9bbd64fe323f96dd3a44cc658e6") {

      creator = '[WhyIsThisAlreadyTake](https://www.reddit.com/user/WhyIsThisAlreadyTake/)'
      title = '[Plasma](https://www.reddit.com/r/unixporn/comments/pnvdaw/plasma_simple_nord_rice/)'
      dots = 'https://github.com/S4MUDR4-M/config'

    }

    if (answer == "https://preview.redd.it/gnvukt5u76271.png?width=640&crop=smart&auto=webp&s=2871329c079bb6761532a82ffc0aadcaf0635415") {

      creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
      title = '[Bspwm Dark Theme](https://www.reddit.com/r/unixporn/comments/no1we8/bspwm_dark_theme/)'
      dots = 'Deleted.'

    }

    if (answer == "https://i.redd.it/2vaf7sg02y471.png") {

      creator = '[woowak01](https://www.reddit.com/user/woowak01/)'
      title = '[Herbstluftwm sidebar](https://www.reddit.com/r/unixporn/comments/nymt1f/herbstluftwm_sidebar/)'
      dots = 'https://github.com/ChocolateBread799/sidebar'

    }

    if (answer == "https://i.redd.it/4s2cvdz1b6381.jpg") {
      creator = '[pau1rw](https://www.reddit.com/user/pau1rw/)'
      title = '[BSPWM Ive been working on my Daily Driver, Im calling this it Polar Winter - my wife still doesnt care.](https://www.reddit.com/r/unixporn/comments/r9naf6/i3gaps_picom_with_blur_effect_doom_emacs_with/)'
      dots = 'https://github.com/prdanelli/dotfiles'

    }

    if (answer == "https://preview.redd.it/2gjrlgzt39381.png?width=640&crop=smart&auto=webp&s=588e05196dd4fced38cc6e33020defbedf3ed8a7") {
      creator = '[ronasimi](https://www.reddit.com/user/ronasimi/)'
      title = '[i3-gaps My minimal but comfortable daily driver.](https://www.reddit.com/r/unixporn/comments/r7pvbc/i3gaps_my_minimal_but_comfortable_daily_driver/)'
      dots = 'https://github.com/ronasimi/dotfiles'
    }

    if (answer == "https://i.redd.it/yx8zrzcmx1261.png") {

      creator = '[Vista1nik](https://www.reddit.com/user/Vista1nik/)'
      title = '[Winter is coming...](https://www.reddit.com/r/unixporn/comments/k2wgxb/i3gaps_winter_is_coming/)'
      dots = 'https://github.com/Vista1nik/i3-winter2020'
    }

    if (answer == "https://i.redd.it/ckbh94gxf4t31.png") {

      creator = '[](https://www.reddit.com/user/Gullible-Soil-6907/)'
      title = '[Plasma Winter is coming..](https://www.reddit.com/r/unixporn/comments/dj85cx/plasma_winter_is_coming/)'
      dots = 'None'

    }







    const AllEmbed = new MessageEmbed()
      .setDescription(`${title}`)
      .addField('Creator', `${creator}`, true)
      .addField('Dots', `${dots}`, true)
      .setColor('WHITE')
      .setImage(answer)
    message.channel.send({ embeds: [AllEmbed] });
  }
};
