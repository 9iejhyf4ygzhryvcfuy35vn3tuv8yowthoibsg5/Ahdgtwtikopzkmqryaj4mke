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

client.login(process.env.BOT_TOKEN);
