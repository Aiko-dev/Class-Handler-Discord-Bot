module.exports = class {
    constructor(client) {
        this.client = client;
    }

    run(message) {
        const user = message.author;
        if (user.bot) return;
        user.send("I don't answer in dm channel !");

    }

}
