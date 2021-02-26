const Command = require('../struct/Command')

module.exports = class Ping extends Command {
    constructor(client){
        super(client,{
            name: 'ping',
            description: 'Send the Bot\'s ping',
            category: 'bot',
            usage: '',
            aliases: ['aliases'],
        
        })
    }
   run(message,args) {
    message.channel.send(`Pong ${this.client.ws.ping}`)
   };
}
