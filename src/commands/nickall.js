const { Member } = require("eris");
const Discord = require("yuuko");

module.exports = new Discord.Command("nickall", (msg,args,ctx) => {

    var members = ctx.client.guilds.get(msg.guildID).members;

    members.forEach(member => {
        
        try {
            member.edit({
                nick: args.join(" ") 
            })
        } 
        catch (_) { }

    });
})