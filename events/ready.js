module.exports = class {
    constructor(client) {
        this.client = client;
    }

    run() {

      console.log(`Online on ${this.client.user.tag} !`)
      
    }
}
