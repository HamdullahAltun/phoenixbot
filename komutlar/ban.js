const Discord = require('discord.js');
exports.run = (client, msg, args) => {
  if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return msg.author.sendEmbed(ozelmesajuyari); }
  let guild = msg.guild
  let reason = args.slice(1).join(' ');
  let user = msg.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return msg.reply('`mod-log` kanalını bulamıyorum.');
  if (msg.mentions.users.size < 1) return msg.reply('Kimi sunucudan banlayacağını yazmalısın.');
  if (reason.length < 1) return msg.reply('Sunucudan banlama sebebini yazmalısın.').catch(console.error);

  if (!msg.guild.member(user).bannable) return msg.reply(':warning: Yetkilileri sunucudan banlayamam.');
  msg.guild.member(user).ban();
  msg.delete();

  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
	.setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('Eylem:', 'Sunucudan banlama')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${msg.author.username}#${msg.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban','yasakla'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'ban [kullanıcı] [sebep]'
};
