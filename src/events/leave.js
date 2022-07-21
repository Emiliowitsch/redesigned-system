const Discord = require("yuuko");

var channelID = "999581549055971381";

module.exports = new Discord.EventListener("guildMemberRemove",(server,member,ctx) => {
    var channel = server.channels.find(c => c.id == channelID)
    if(channel === undefined){
        console.log("fehlgeschlagen");
        return;
    }

    channel.createMessage(`Tschüss ${member.user.username}!`);
})