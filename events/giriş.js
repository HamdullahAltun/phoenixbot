const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {
        var embed = new Discord.RichEmbed()
        .setDescription(`<@!${member.user.id}> **PHOENIX GAMING DISCORD SUNUCUSUNA HOŞGELDİN** :hugging:`)
        .setColor('GREEN') 
    member.guild.channels.get("504935708738453524").send(embed)

  let msj = await db.fetch(`girisM_${member.guild.id}`)
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
  
  const canvas = Canvas.createCanvas(720, 250);
  const ctx = canvas.getContext('2d');
  const background = await Canvas.loadImage('https://media.discordapp.net/attachments/630485872701079592/643146036180942898/test2.png');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `32px "Aerial"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 310, 130);
  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  ctx.drawImage(avatar, 40, 60, 130, 130);
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'PhoenixHosgeldin.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj.replace('{uye}', member).replace('{sunucu}', member.guild.name))
  if (member.user.bot) return member.guild.channels.get(memberChannel).send(`🤖 ${member.user.tag}, bir bot!`)
  
}