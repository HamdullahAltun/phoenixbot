const Discord = require('discord.js');

let botid = ('') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Phoenix Gaming Steam Grubu`)
    .addField('https://steamcommunity.com/groups/phoenixxfun','ARADA KIRMA BİZİ  ZİYARET ET :smiley:')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['grup','steamgrup','steamgrubu'],
  permLevel: 0,
};

exports.help = {
  name: 'grup',
  description: '',
  usage: ''
};