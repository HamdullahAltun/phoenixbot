const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("=                          Phoenix Gaming Yetki Fiyatları                         =")
    .addField('【Vip】', 'SINIRSIZ 30 TL') 
    .addField('【Moderatör】', 'SINIRSIZ 40 TL') 
    .addField('【Admin】', 'SINIRSIZ 50 TL') 
    .addField('【Yönetici】', 'SINIRSIZ 60 TL') 
    .addField('【Genel Yönetici】', 'SINIRSIZ 70 TL') 
    .addField('Yetki almayı düşünüyorsanız bu fırsatı kaçırmayınız. ', 'Detaylı bilgi için www.phoenixxgaming.com dan bakabilirsiniz.' ) 
    .addField('=                      Phoenix Gaming İyi Oyunlar Diler                    =', 'Yetki & Kredi Alabileceğiniz Seçenekler:' ) 
    .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬', 'Yetkiyi ininal kart,cs go skin,steam cüzdan kodu, kontor ve havale ile alabilirsiniz.') 
    .addField('Yetki almak için @Koordinatör  ulaşın, Kordinatörlerin Dışında alınan yetkiler geçersizdir. ', 'UYARI:Adminlik satışlarında hiçbir şekilde iadesi yoktur ve 3 uyarı alan yetkilinin yetkisi silinicektir. ') 
    .addField(`» Sosyal Medya`, `** [Instagram](https://discord.gg/xRNp8gC) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://mee6.xyz/dashboard/432471472867639299/commands)** | **[Steam](https://mee6.xyz/dashboard/432471472867639299/commands)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki', 'yetkifiyatları' ],
  permLevel: 0,
};

exports.help = {
  name: 'yetki',
  description: '',
  usage: ''
};