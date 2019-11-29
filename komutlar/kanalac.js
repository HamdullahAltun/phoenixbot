const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bunu kullanma yetkin yok`)
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    })

    message.channel.send('Kanal başarıyla açıldı')

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kanalaç'],
    permLevel: 0
}

exports.help = {
    name: 'aç',
    description: 'Kanalı açar',
    usage: 'aç'
}