const Logger = require('./logger.js');
const Message = require('./message.js');

const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

const Discord = require('discord.js');



class Bot {
    constructor() {
        this.logger = new Logger();
        this.client = new Discord.Client();

        this.client.on('ready', () => {
            this.logger.log('status: BOT has been ready');
        });

        this.client.on('message', message => {
            if(message.author.bot)
                return;
        
            let msg = new Message(this.logger, this.client, message);
            msg.proceed();
        });
    }

    get botToken() {
        return process.env.DISCORD_BOT_TOKEN;
    }

    login() {
        this.client.login(this.botToken)
            .then(() => {
                console.log('status: BOT has logged in');
            })
            .catch((e) => {
                console.log('status: Failed to BOT login');
            });
    }
}

module.exports = Bot;
