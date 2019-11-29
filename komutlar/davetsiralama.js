const Discord = require("discord.js");

module.exports.run = async (bot, message, args, client) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davetleri göremiyorum yeterli iznim yok');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**DAVET SIRALAMASİ**`)
        .setColor(0xCB5A5E)
        .addField('Davetler', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun/) ** |** [Yotube](https://phoenixxgaming.com)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
  
    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası",'topdavet'],
  permLevel: 0,
  kategori: "sunucu",

};

exports.help = {
  name: 'davet-sıralaması',
  description: 'Sunucunuza en çok kullanıcı getirenleri sıralar.',
  usage: 'davet-sıralaması',
 
};