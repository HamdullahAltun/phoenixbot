const Discord = require('discord.js');

 exports.run = (client, message, args) => {
     if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
   
       if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`).then(m => m.delete(10000));

   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:Neyi oylayacağını yazmadın!:x:`)).then(m => m.delete(5000));

     message.channel.sendEmbed(

       new Discord.RichEmbed()      
       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setFooter('Phoenix Gaming', client.user.avatarURL)

       .addField(`**Anket Başladı!**`, `**${question}**`)).then(function(message) {
message.clear;
         message.react('✅');

         message.react('❌')


       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['anket'],

  permLevel: 2,
           kategori: "Yetkili"

};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '.oylama <oylamaismi>'
};