const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
    client.user.setActivity("009,",{type: 'Playing'});

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

client.on('message', message => {
    var prefix = "$";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 438041950021746689) return;
    
    if (message.content.startsWith(prefix + 'playing')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : Status changed`)
    } else
    
    if (message.content.startsWith(prefix + 'Stream')) {
      client.user.setGame(argresult, "https://www.twitch.tv/ChampionBot");
        message.channel.sendMessage(`**${argresult}** :The bot stream has been changed`)
    } else
    
    if (message.content.startsWith(prefix + 'name')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : Name changed`)
      return message.reply("**You**");
    } else
    if (message.content.startsWith(prefix + 'image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

client.login(process.env.BOT_TOKEN);
