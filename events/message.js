module.exports = class {
    constructor(client) {
        this.client = client;
    } run(message, guild, channel) {
        const prefix = this.client.config.prefix

        if (message.channel.type === "dm") return this.client.emit("dm", message);
        if (message.mentions.everyone === true ) return;
        if (message.mentions.has(this.client.user)) message.channel.send(`${message.author.username}, my prefix on this server \`${this.client.config.prefix}\``)
        
        if (message.author.bot) return; 

        const pattern = new RegExp(`^(<@!?${this.client.user.id}>\\s+(?:${escapeRegex(prefix)}}\\s*)?|${escapeRegex(prefix)}\\s*|${this.client.user.username.toLowerCase()}\\s*)([^\\s]+)`, 'i');
        const matches = pattern.exec(message.content);
        if (!matches) return;
        
        const args = message.content.slice(matches[1].length).trim().split(/ +/g);
        const command = args.shift();
        const cmd = this.client.commands.get(command.toLowerCase()) || this.client.commands.get(this.client.aliases.get(command.toLowerCase()));
        if(!cmd) return;  

        function escapeRegex(str) {
            return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
   }
      
        cmd.setMessage(message);
        cmd.run(message, args);

        if (cmd.conf.cooldown > 0) cmd.startCooldown(message.author.id); 
    }
}      
