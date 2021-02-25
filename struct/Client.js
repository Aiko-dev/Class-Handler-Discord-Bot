const { Client, Collection } = require("discord.js");
const { readdir } = require("fs");

class CustomClient extends Client {
    constructor(options){
        super(options.clientOptions || {});
        /**
         * @type {CDiscord.collection}
         */
        this.commands = new Collection(); 
        
        
        /**
         * @type {Discord.collection}
         */
        this.aliases = new Collection()

        this.config = require('../config'); 
        
       
    }
    /**
     * @param {string} token 
     */
    login(token){
        super.login(token)
        return this;
    }
 
    

    /**
     * @param {String} path 
     */
    loadCommands(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(cmd => {
                if (cmd === '.DS_Store') return
                const command = new (require(`../${path}/${cmd}`))(this);

                this.commands.set(command.help.name, command);

                command.conf.aliases.forEach(a => this.aliases.set(a, command.help.name));
            });
        });

        return this;
    }
    /**
     * @param {String} path
     */
    loadEvents(path) {
        readdir(path, (err, files) => {
            if (err) console.log(err);

            files.forEach(evt => {
                if (evt === '.DS_Store') return
                const event = new (require(`../${path}/${evt}`))(this);
                super.on(evt.split(".")[0], (...args) => event.run(...args));
            });
        });

        return this;
    }

}
module.exports = CustomClient 
