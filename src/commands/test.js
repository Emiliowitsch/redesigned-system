const Discord = require("yuuko");

module.exports = new Discord.Command("test", (msg,args,ctx) => {
    msg.channel.createMessage("Bot is working");
})