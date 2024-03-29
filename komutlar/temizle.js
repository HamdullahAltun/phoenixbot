const Discord = require('discord.js');


exports.run = function(client, message, args) {
//Komutun Kodları
  const m = args.join(' ');
  if(!m) return message.channel.send('**:gear: Bir miktar girmelisiniz!**');
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**:x: Bu işlem için gerekli izne sahip değilsiniz!**');
  if(m < 2) return message.channel.send(':gear: **En az 2 mesaj silebilirim!**')
 if(m>100) return message.channel.send('**:gear: En fazla 100 mesaj silebilirim!**')
  message.channel.bulkDelete(m);
  

  message.channel.send(
  new Discord.RichEmbed()
    .setTitle(':gear: **Başarılı!**')
    .setDescription('**Başarı ile __'+m+'__ mesaj silindi! :gear:**')
  .setColor('0x36393E')
  ).then(msg => msg.delete(5000))
  };
   

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['temizle','delete','sil','clear'],
  permLevel: 2 
};

exports.help = {
  name: 'sil',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100' 
}