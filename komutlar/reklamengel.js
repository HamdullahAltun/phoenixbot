const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`.reklam aç\` | Kapatmak İstiyorsanız \`.reklam kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`.reklam aç\` | Kapatmak İstiyorsanız \`.reklam kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`Reklam Filtresi başarıyla ayarlandı.`).then(message => message.delete(5000));  
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Reklam filtresini açtığına emin misin?.`).then(message => message.delete(5000));
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`Reklam Filtresini Kapattım.`).then(message => message.delete(5000));
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklamfiltre'],
 permLevel: 2
};

exports.help = {
 name: 'reklam',
 description: 'reklamm',
 usage: 'gkanal'
};