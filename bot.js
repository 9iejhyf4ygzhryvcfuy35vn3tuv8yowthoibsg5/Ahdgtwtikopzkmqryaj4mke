const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('Bot Started', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('466481150312054785');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice ⇏ 「 ${currentSize} 」`);
  if (currentSize !== size) channel.setName(`Voice ⇏ 「 ${currentSize} 」`);
});

client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "$type"){
message.channel.startTyping();
}
});
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "$type"){
message.channel.stopTyping();
}
});

 KiNg66S.on('message', function(KiNg66S) {
if (KiNg66S.author.bot) return;
if (KiNg66S.author.id === KiNg66S.user.id) return;
if (KiNg66S.author.equals(KiNg66S.user)) return;
if (!KiNg66S.content.startsWith(prefix)) return;

var args = KiNg66S.content.substring(prefix.length).split(' ');
switch (args[0].toLocaleLowerCase()) {
case "clear" :
KiNg66S.delete()
if(!KiNg66S.channel.guild) return
if(KiNg66S.member.hasPermissions(0x2000)){ if (!args[1]) {
KiNg66S.channel.fetchMessages()
.then(messages => {
KiNg66S.channel.bulkDelete(messages);
var messagesDeleted = messages.array().length;
KiNg66S.channel.sendMessage(' '+ " " + messagesDeleted + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
})
} else {
let messagecount = parseInt(args[1]);
KiNg66S.channel.fetchMessages({limit: messagecount}).then(messages => KiNg66S.channel.bulkDelete(messages));
KiNg66S.channel.sendMessage(' '+ " " + args[1] + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
KiNg66S.delete(60000);
}
} else {
var manage = new Discord.RichEmbed()
.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
.setColor("RANDOM")
KiNg66S.channel.sendEmbed(manage)
return;
}
}
});
  

client.login(process.env.BOT_TOKEN);
