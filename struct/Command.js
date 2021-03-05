class Command {
    constructor(
        client,
        {
            name = null,
            description = "No description",
            category = "Other",
            usage = "No usage",
            enabled = true,
            guildOnly = true,
            aliases = new Array(),
            cooldown = 1000,
            arg = false,
            rpg = false
        }
    ) {
        this.client = client;
        this.cooldown = new Set()
        this.conf = { enabled, guildOnly, aliases, cooldown, category, arg};
        this.help = { name, description, category, usage, arg, aliases };
    }
    startCooldown(user) {

        this.cooldown.add(user);

        setTimeout(() => {
            this.cooldown.delete(user);
        }, this.conf.cooldown);
    }

    setMessage(message) {
        this.message = message; 
    }

}
module.exports = Command;
