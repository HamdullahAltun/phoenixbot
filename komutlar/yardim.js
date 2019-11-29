const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Phoenix Gaming Discord Botu Yardım Menüsü")
  .setDescription('')
  .setColor('RANDOM')
  .addField("** :busts_in_silhouette: Kullanıcı Komutları :busts_in_silhouette:**", `.kullanıcı = Kullanıcı Komutlarını Gösterir  `)
  .addField("** :tada: Eğlence Komutları :tada:**", `.eğlence = Eğlence Komutlarını Gösterir `)
  .addField("** :musical_note: Müzik Komutları :musical_note:**", `.müzik = Müzik Komutlarını Gösterir  `)
  .addField("**:no_entry: Sunucu Yetkilisi Komutları :no_entry:**", `.yetkili = Sunucu Yetkilisi Komutlarını Gösterir.`)
  .addField("**:no_entry: Sunucu Yetkilisi Komutları :no_entry:**", `.yetkili2 = Sunucu Yetkilisi 2. Komutlarını Gösterir.`)
  .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
  .setFooter('Phoenix Gaming Güncel Sürüm [1.1]')
  message.react('✅')
if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nKomutun Kullanımı: ` + prefix + `${command.help.usage}`);
    }
  }
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};