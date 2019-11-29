const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('.anket', 'Anket yaparsınız.')
    .addField('.ban', 'Etiketlediğiniz kişiyi banlarsınız') 
    .addField('.çekiliş', 'Yapım aşamasında! ')
    .addField('.duyuru','Duyuru yaparsınız. ')
    .addField('.kanalkapat','Komutu yazdığınız kanalda mesaj gönderimini kapatır.')
    .addField('.kanalaç','Komutu yazdığınız kanalda mesaj gönderimini açar.')
    .addField('.kick', 'Etiketlediğiniz kişiyi sunucudan atarsınız') 
    .addField('.küfür-engel', 'Küfür korumasını ayarlarsınız') 
    .addField('.modlog', 'Mod-log kanalını ayarlarsınız')
    .addField('.pgag', 'İstediğiniz kişiye gag atarsınız')
    .addField('.pmute','İstediğiniz kişiye mute atarsınız.')
    .addField('.reklam','Reklam korumasını ayarlarsınız')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 2,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};