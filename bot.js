const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const express = require('express');
const app = express();
const Jimp = require('jimp');
const db = require('quick.db');
const http = require('http');
    app.get("/", (request, response) => {
    console.log(`7/24`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 180000);
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on('guildMemberAdd', async (member, guild, message) => {

let role = await  db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = await db.fetch(`autoRole_${member.guild.id}`)
 let i = await db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
  

  if (!i) return 

  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucumuza Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('RANDOM')
                        .setFooter(`Phoenix Gaming Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});


client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "a q", "sex", "seks", "amına", "orospu çocuğu", "siktir git","a-q","awk","gavat",'göt','anan','yarrrak','a.q','aQ','s2k','s2ş','s2m','dasak','daşşak','orispi','orospi','b0k'];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("MANAGE_GUILD")) {
      msg.delete()
       msg.channel.send(`✋${msg.author}, kFür gÜnaH MoRuQq!`).then(message => message.delete(5000));
    }
}
    }
});

client.on(`guildMemberAdd`, async member => {
  const e = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setAuthor('PHOENIX AİLESİNE HOŞGELDİNİZ')
  .setDescription('PHOENIX GAMING DISCORD KURALLARI')
  .addField('➡️ Genel-Sohbet Kanalında 5 Saniye Slow-Mode vardır. Spam atmanız durumunda ban yersiniz.',':no_entry_sign: Profilinizde gerçek isim ve yaş zorunludur. İsminizin başında SEMBOL ve EMOJİ YASAKTIR.')
  .addField(':no_entry_sign: Sohbet ederken söz kesmemeye, rahatsız edici sesler çıkarmamaya ve odalarda gereksiz mikrofon kullanmamaya özen gösteriniz.',':no_entry_sign: Probleminiz olduğunda lütfen kendiniz müdahalede bulunmayınız. Derhal bir yetkiliye bildiriniz!')
  .addField(':no_entry_sign: Küfür, Link, Reklam, Büyük Harflerle Yazma, Reklam, Irkçılık, Din, Spam, Flood, Troll, Siyaset ve 3. şahıs hakkında konuşmak kesinlikle YASAKTIR!',':no_entry_sign: Sunucumuzda karşılıklı veya karşılıksız eşya isteği YASAKTIR.')
  .addField(':no_entry_sign: Oyun odalarında, oyun oynayanları rahatsız etmek ve gereksiz yer işgal etmek YASAKTIR.',':no_entry_sign: Saygısızca, kavga çıkartıcı veya ortam gerici cümleler kurmak ve sözler söylemek YASAKTIR.')
  .addField(`:no_entry_sign: Sunucumuzda 'bet' muhabbeti YASAKTIR!`,`:no_entry_sign: Discord'a Steam hesabınızı bağlamak ZORUNLUDUR.`)
  .addField('➡️ Kurallara uymayanlar ilk önce uyarılır. Uyarıyı dikkate almayanlar sunucudan süresiz olarak uzaklaştırılır.','⛔️ **HİÇBİR YETKİLİ SİZDEN ASLA HESAP - İTEM - OYUN VE BENZERİ ŞEYLER İSTEMEZ.**')
  .addField(':warning:**SUNUCU KURALLARI**:warning:','https://steamcommunity.com/groups/PhoenixxFun/discussions')
  .addField(':warning:**BAN-PMUTE-PGAG KURALLARI**:warning:','https://steamcommunity.com/groups/PhoenixxFun/discussions')
    .addField(`» Sosyal Medya`, `** [Instagram](https://www.instagram.com/phoenixxfun) ** |** [Youtube](https://www.youtube.com/channel/UC2UMbRmlEXHlvkLMDiIgHZw)** |** [Twitch](https://www.twitch.tv/phoenixfuntv)** | **[Steam](https://steamcommunity.com/groups/PhoenixxFun)**`) 
    .setFooter('Senin Sunucun Senin Eğlencen - phoenixxgaming.com')
    .setThumbnail(client.user.avatarURL)
  member.send(e);
});
  
client.on("message", async msg => {
  if (msg.content == "<@631538089747152899>") {
      return msg.reply(
            "\n•Prefixim: \`.\` \n•Komutları görmek için \`.yardım\` yazmalısın. "
                );
                  }
                  });

client.on("message", async msg => {
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",'.scr'];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_ROLES")) {
                    msg.delete();                    
                    const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setFooter('Phoenix Gaming Bot Reklamı engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("Phoenix Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladı.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    return msg.channel.send(`✋${msg.author}, RekLaM YapMaK YasAk MoRuQq!`).then(msg => msg.delete(5000));
                   return client.channels.get("584149263290990604").send(embed);
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          }); 

client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 3) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, mOruQ sEniN cAps AçıK KaLmıŞ!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});


client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:outbox_tray: \`${member.user.tag}\` aramızdan ayrıldı! \`${sayac[member.guild.id].sayi}\` Kişi olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` kişi kaldı!`);
  } catch (e) { 
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:inbox_tray: \`${member.user.tag}\` aramıza katıldı! \`${sayac[member.guild.id].sayi}\` Kişi olmamıza \`${sayac[member.guild.id].sayi - member.guild.memberCount}\` kişi kaldı!`);
  } catch (e) { 
    return console.log(e)
  }
 
});


client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.RichEmbed()
         .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
         .setColor('RANDOM')
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("633304309827633152","642359175287930901").send(dmlog);
    }
});


client.on('message', async msg => {

  if (msg.content.toLowerCase() === 'sa') {

    await msg.react('🇦');


    msg.react('🇸');

  }

  });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.TOKEN);