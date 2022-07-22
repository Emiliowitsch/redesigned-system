const { Member } = require("eris");
const Discord = require("yuuko");

module.exports = new Discord.Command("spam", (msg,args,ctx) => {

    if(args.length > 1){
        var target = new Number(args[0]);

        for (let i = 0; i < target; i++) {
            msg.channel.createMessage(args.slice(1).join(" "));
        }
    }
    
})