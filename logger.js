class Logger {
    constructor() {
        this.logCount = 0;
    }

    log(message) {
        this.logCount++;
        console.log(message);
    }
}

module.exports = Logger;
