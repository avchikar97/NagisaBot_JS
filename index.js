const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'ping'){
        //message.reply('pong');
        message.channel.sendMessage('pong');
    }

});

bot.login(config.token);