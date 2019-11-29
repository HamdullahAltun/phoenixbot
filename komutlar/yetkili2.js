const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları 2`)
    .addField('.kanal-ayarla','Resimli giriş kanalını ayarlarsınız')
    .addField('.kanal-sıfırla','Resimli giriş kanalını sıfırlarsınız')
    .addField('.sayaç',' Sayacı ayarlarsınız') 
    .addField('.sayaçsıfırla','Sayacı sıfırlarsınız')
    .addField('.slowmode','Slowmodeyi ayarlarsınız')
    .addField('.söyle', 'Yazdığınız cümleyi bot sesli olarak söyler')
    .addField('.scbilgi', 'Sunucu hakkında bilgi alırsınız')
    .addField('.sil','Yazdığınız miktardaki mesajı temizler')
    .addField('.unban','Banlanan kişinin banını açarsınız')
    .addField('.yaz','İstediğiniz cümleyi bota yazdırırsınız') 
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili2','yetkili 2'],
  permLevel: 2,
};

exports.help = {
  name: 'yetkili2',
  description: '',
  usage: ''
};