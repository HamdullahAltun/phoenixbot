const Discord = require('discord.js');

let botid = ('') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Phoenix Gaming Sunucuları GameTracker Sıralamaları`)
    .addField('https://cache3.gametracker.com/search/csgo/TR/?query=phoenix&sort=3&order=DESC','Sunucuların Güncel Sıralamasını Burdan Görebilirsiniz.')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gt','gametracker'],
  permLevel: 0,
};

exports.help = {
  name: 'gt',
  description: '',
  usage: ''
};