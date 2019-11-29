const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message, args) => {
  const resim = await get('https://api.emirkabal.com/ataturk').set('Authorization', 'qvetcg83-v7m5o7y4fv2ms01hwbk1re08oa68456r8fdqzc-6ity-dx39gcwlxas');
  if (!resim || !resim.body || !resim.body.mesaj) return console.log("Bir hata oluştu.");
  const attachment = new Discord.Attachment(resim.body.mesaj)
   message.channel.send(attachment)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atatürk'],
  permLevel: 0
};

exports.help = {
  name: "atatürk",
  description: "Rastgele atatükr fotoğrafları atar!",
  usage: "atatürk"
};