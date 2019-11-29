const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} AKTİF`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] HOOP ${client.user.username} GELDİ`);
  client.user.setStatus("online");
   var oyun = [
"🎮Phoenix Gaming | 185.193.165.227 / 185.248.57.12 / 185.193.165.215 / 185.193.165.237 / 185.193.165.37 ", 
"🏄Phoenix Surf | 185.193.165.237", 
"🔪Phoenix Jailbreak | 185.193.165.227", 
"🎯Phoenix Aim | 185.193.165.37", 
"🔫Phoenix Awp | 185.193.165.215", 
"💣Phoenix Retake | 185.248.57.12",
     "Senin Sunucun Senin Eğlencen",
     "phoenixxgaming.com",
     ".yardım",
     "Made By pRx",
     "Made By pRx"
        
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/prxtvv");
        }, 2 * 2500);
}