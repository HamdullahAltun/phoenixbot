const Discord = require('discord.js');

let botid = ('') 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Phoenix Gaming Logoları" )
    .addField(' https://i.hizliresim.com/3O81L9.png', 
  'Logo Üzerinde Oynama Yapmadan Her Türlü Resime Editleyebilirsiniz.') 
    .addField('Kırmızı Logo','https://cdn.discordapp.com/attachments/630485872701079592/647130777510871050/phoenix_kirmizi.png')
    .addField('Beyaz Logo','https://cdn.discordapp.com/attachments/630485872701079592/647130779813543937/phoenix_beyaz.png')
    .addField('Kırmızı Logo (PSD) :','https://cdn.discordapp.com/attachments/551119013581684746/567808858764869632/phoenix_krmz.psd')
    .addField('Beyaz Logo (PSD)','https://cdn.discordapp.com/attachments/551119013581684746/567808868789256217/phoenix_beyaz.psd')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['logo'],
  permLevel: 0,
};

exports.help = {
  name: 'logo',
  description: '',
  usage: ''
};