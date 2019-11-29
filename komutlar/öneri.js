const Discord = require("discord.js");

exports.run = function(client, message, args) {
  let type = args.slice(0).join(" ");
  if (type.length < 3)
    return message.channel.send(
      new Discord.RichEmbed()
      .setDescription("Doğru Kullanım: .öneri Bence bunu bunu eklerseniz daha iyi olur")
    );
  
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author} adlı kullanıcının önerisi:`)
    .addField(
      `Kulanıcı Bilgileri`,
      `Kullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`
    )
    .addField("Öneri", type)
    .setThumbnail(message.author.avatarURL);
  client.channels.get("622423710334451720").send(embed2);
 message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öneri"],
  permLevel: 0
};

exports.help = {
  name: "tavsiye",
  description: "Bot için tavsiye bildirirsiniz",
  usage: "tavsiye <tavsiyeniz>"
};
