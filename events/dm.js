module.exports = class {
    constructor(client) {
        this.client = client;
    }

    run(message) {
        const user = message.author;
        if (user.bot) return;
        user.send("Je ne répond pas en message privé !");

    }

}
