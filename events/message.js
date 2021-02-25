module.exports = class {
    constructor(client) {
        this.client = client;
    } run(message, guild, channel) {

        if (message.channel.type === "dm") return this.client.emit("dm", message);
        if (message.mentions.everyone === true ) return;
        if (message.mentions.has(this.client.user)) message.channel.send(`${message.author.username}, mon préfix sur ce serveur est \`${this.client.config.prefix}\``)
        
        if (message.author.bot) return; 
        
        const args = message.content.slice(matches[1].length).trim().split(/ +/g);
        const command = args.shift();
        const cmd = this.client.commands.get(command.toLowerCase()) || this.client.commands.get(this.client.aliases.get(command.toLowerCase()));
        if(!cmd) return;  
      
        cmd.setMessage(message);
        cmd.run(message, args, ErrorEmbed);
        db.add('cmd', 1)

        if (cmd.conf.cooldown > 0) cmd.startCooldown(message.author.id); 
    }
}      
