const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MUTE_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri sustur` yetkisine sahip olmanız gerek.")
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("Süre belirtmelisin.")
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin.")
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}ms`)
        .then(() =>
            message.channel.send(`${kullanici} \`${süre}\`**ms** ses kanallarında susturuldu.`)).then(message => message.delete(5000));  
  message.delete()
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`).then(message => message.delete(5000));  
        message.channel.send(`${kullanici} Süresi dolduğu için mikrafonu açıldı. `).then(message => message.delete(5000));  

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['pmute','mute'],
    permLevel: 2
};

exports.help = {
    name: 'mic-kapat',
    description: 'Ping was here',
    usage: ""
}