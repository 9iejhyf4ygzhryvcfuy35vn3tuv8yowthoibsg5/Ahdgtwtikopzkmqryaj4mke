const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
    client.user.setActivity("009,",{type: 'Playing'});

});

client.on('ready', () => {
    client.user.setStatus("Idnd");
 
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
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('$bc-all')){
    if(!message.author.id === '') return;
    message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

client.on('message', message => {

    if(message.content === prefix + "$mutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
           });
             }
//FIRE BOT
 if(message.content === prefix + "$unmutechannel") {
                     if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**__تم فتح الشات__:white_check_mark:**")
           });
             }
             
      
    
});

client.login(process.env.BOT_TOKEN);
