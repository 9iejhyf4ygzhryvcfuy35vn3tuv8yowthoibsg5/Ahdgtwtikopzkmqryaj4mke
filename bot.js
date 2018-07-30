const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const eris = require('eris');
const args = require('args');

client.on('ready', () => {
  console.log('System Bot');
});

client.on('ready', async () => {
   client.user.setActivity("Renex System,", {type: "WATCHING"})
   client.user.setStatus('DND')
});

client.on("ready", () => {
var guild;
while (!guild)
guild = client.guilds.get("471359026672828426");
guild.fetchInvites().then((data) => {
data.forEach((Invite, key, map) => {
var Inv = Invite.code;
dat[Inv] = Invite.uses;
});
});
}); 

client.on("guildMemberAdd", (member) => {
let channel = member.guild.channels.get("471861902084145165");
if (!channel) {
console.log("!the channel id it's not correct");
return;
}
if (member.id == client.user.id) {
return;
}
console.log('-');
var guild;
while (!guild)
guild = client.guilds.get("471359026672828426");
guild.fetchInvites().then((data) => {
data.forEach((Invite, key, map) => {
var Inv = Invite.code;
if (dat[Inv])
if (dat[Inv] < Invite.uses) {
channel.send(`welcome To ${member.guild.name}\nتم دعوته بواسطة  ${Invite.inviter} `) ;       
}
dat[Inv] = Invite.uses;
});
});
});

client.login(process.env.BOT_TOKEN);
