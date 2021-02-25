module.exports = class {
    constructor(client) {
        this.client = client;
    }

    run() {

      console.log(`En ligne sous le nom ${this.client.user.tag} !`)
      
    }
