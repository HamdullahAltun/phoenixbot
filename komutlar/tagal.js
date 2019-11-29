const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Oyun İçinde Takım Etiketi Nasıl Alınır?`)
    .setDescription('Skor tablosundaki Sunucu İnternet Sitesi kısmından gruba katıldıktan sonra tag alma işlemini iki farklı yol ile yapabilirsiniz')
    .addField('> Oyun içinde ESC - Seçenekler - Oyun Ayarları - Steam Klan Etiketi - PhoenixGame','> Oyun içinde Konsol - cl_clanid 28697344')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tagal','tag alma','tagalma'],
  permLevel: 0,
};

exports.help = {
  name: 'tagal',
  description: '',
  usage: ''
};