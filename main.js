const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

const Discord = require('discord.js');
const botClient = new Discord.Client();



botClient.on('ready', () => {
    console.log('status: BOT has been ready');
});



botClient.on('message', message => {
    if(message.author.bot)
        return;

    message.channel.send(message.content);

    if(message.content == 'quit')
        process.exit(0);
});



botClient.login(DISCORD_BOT_TOKEN)
    .then(() => {
        console.log('status: BOT has logged in');
    })
    .catch((e) => {
        console.log('status: Failed to BOT login');
    });
