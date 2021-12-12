var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// configure logger settings
//this might be more for the tutorial
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('0Logged in as: ')
    logger.info(bot.username + ' - (' + bot.id + ')');

});

bot.on('message', function (user, userID, channelID, message, evt) {
    //listen for messages that start with !
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        // the real shit
        switch (cmd) {
            //ping (testing)
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: "suck my ass"
                });
                break;
            
            case 'cum':
                bot.sendMessage({
                    to: channelID,
                    message: "Harder Daddy"
                });
                break;
            
            case 'add':
                var answer = parseInt(args[1]) + parseInt(args[2]);
                bot.sendMessage({
                    to: channelID,
                    message: "" + answer
                })
                break;
            
        }
    }
})

// https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/