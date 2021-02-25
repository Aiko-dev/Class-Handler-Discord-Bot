class Command {
    constructor(
        client,
        {
            name = null,
            description = "No description provided.",
            category = "Other",
            usage = "No usage provided.",
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
        this.conf = { enabled, guildOnly, aliases, cooldown, category, arg, rpg}; 
        this.help = { name, description, category, usage, arg, rpg, aliases }; 
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
