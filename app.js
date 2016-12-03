const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = "!";

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.sendMessage('pong');
  }
});

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "avatar")) {
    message.reply(message.author.avatarURL);
  }
});

client.on('guildMemberAdd', member => {
    var channels = member.guild.channels.array().filter(function(entry){
        return entry.name == 'all' && entry.type == 'text';
    });
    if (channels.length > 0) {
        channels[0].sendMessage("Hi " + member +"! Welcome to <server name>'s Discord.");
    }
});

client.login('<bot token>');
