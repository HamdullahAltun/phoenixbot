const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Phoenix Gaming Sunucu Ip leri")
    .addField('Phoenix Surf: 185.193.165.237', 'connect surf.phoenixxgaming.com')
    .addField('Phoenix Aim: 185.193.165.37','connect aim.phoenixxgaming.com')
    .addField('Phoenix Jailbreak 185.193.165.227','connect jb.phoenixxgaming.com')
    .addField('Phoenix Awp: 185.193.165.215','connect awp.phoenixxgaming.com')
    .addField('Phoenix Retakes: 185.248.57.12', 'connect retakes.phoenixxgaming.com')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ip'],
  permLevel: 0,
};

exports.help = {
  name: 'ip',
  description: '',
  usage: ''
};