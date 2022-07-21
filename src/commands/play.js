const Discord = require("yuuko");
const { Message } = require("eris");

module.exports = new Discord.Command("play", async (msg, args, ctx) => {

    // var serverID = msg.guildID;

    // if(ctx.playlist[serverID] == undefined){
    //     ctx.playlist[serverID] = [];
    // }
    // console.log(args);

    // var videoID = args[0].split("v=")[1].split("&")[0];
    // console.log(ctx.playlist[serverID].length);


    // if(ctx.playlist[serverID].length < 2){
    //     var channelID = msg.member.voiceState.channelID;
    //     var connection = await ctx.client.joinVoiceChannel(channelID);

    //     ctx.playlist[serverID].push(videoID);

    //     ctx.playAudio(connection, msg, ctx);
    // }
})