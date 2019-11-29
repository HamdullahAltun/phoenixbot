module.exports = member => {
  let guild = member.guild;
  member.send('Üzdün Kral 😢');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};