const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)
    .addField('.barkod','İnininal barkodumuzu gösterir')
    .addField('.topdavet', 'Sunucuya en çok kişi getirenleri sıralar')
    .addField('.dc','Discord davet linkini gösterir')
    .addField('.grup','Steam grubunun linkini gösterir')
    .addField('.gt','Phoenix Gaming sunucularının GameTracker deki sıralamalarını gösterir')
    .addField('.instagram','Kullanıcı adını yazdığınız kişinin instagram hesabını gösterir.')
    .addField('.ip','Phoenix Gaming Sunucu IP lerini gösterir')
    .addField('.logo','Phoenix Gaming logolarını gösterir')
    .addField('.site','Phoenix Gaming web sitesini gösterir')
    .addField('.spotify','Etiketlediğiniz kişinin spotifyde dinlediği şarkı bilgilerini gösterir')
    .addField('.tagal','Oyun içi nasıl tag alınır onu gösterir')
    .addField('.müzik','Müzik komutlarını listeler')
    .addField('.steam', 'Steamdaki oyunlar hakkında bilgi edinirsiniz')
    .addField('.yetki','Phoenix Gaming Sunucu yetki fiyatlarını gösterir')
    .addField('.öneri', 'Öneri önerirsiniz') 
    .addField('.yapımcı', 'Botun yapımcısı hakkında bilgi edinirsiniz') 
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Yotube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed)
  message.react(`:phoenix:`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı' ],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: ''
};