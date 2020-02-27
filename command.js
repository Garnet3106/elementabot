class Command {
    constructor(logger, client, message) {
        this.message = message;
    }

    get prefix() {
        return '-';
    }

    proceed() {
        this.text = this.message.content.slice(this.prefix.length);
        this.textDivide = this.text.split(' ');
        this.commandName = this.textDivide[0];
        this.commandArgs = this.textDivide.slice(1);

        this.message.channel.send(this.commandName);
        console.log(this.commandArgs);
    }
}

module.exports = Command;
