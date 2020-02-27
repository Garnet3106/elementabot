const Command = require('./command.js');



class Message {
    constructor(logger, client, message) {
        this.logger = logger;
        this.client = client;
        this.message = message;
    }

    proceed() {
        if(this.message.author.bot)
            return;

        let cmd = new Command(this.logger, this.client, this.message);

        if(this.message.content.startsWith(cmd.prefix)) {
            cmd.proceed();
        }
    }
}

module.exports = Message;
