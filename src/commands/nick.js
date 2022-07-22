const { Member } = require("eris");
const Discord = require("yuuko");

module.exports = new Discord.Command("nick", (msg,args,ctx) => {

    var members = ctx.client.guilds.get(msg.guildID).members;
    var target = args[0].split("<@")[1].split(">")[0];

    members.forEach(member => {
        
        if(target != member.id){
            return;
        }

        try {
            member.edit({
                nick: args.slice(1).join(" ") 
            })
        } 
        catch (_) { }

    });
})