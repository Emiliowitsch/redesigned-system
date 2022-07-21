const { Member } = require("eris");
const Discord = require("yuuko");

var channelID = "999581549055971381";

module.exports = new Discord.EventListener("presenceUpdate",(other, oldPresence) => {
    var server = other.guild;
    var channel = server.channels.find(c => c.id == channelID)
    if(channel === undefined){
        console.log("fehlgeschlagen");
        return;
    }

    var bla = other;

    if (bla.activities.length < 1) return;
    channel.createMessage(`${other.username} spielt ${bla.activities[0].name}!`);
});