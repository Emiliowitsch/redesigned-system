const Discord = require("yuuko");
const ytdl = require("ytdl-core");

module.exports = new Discord.Command("playonce", async (msg, args, ctx) => {

    var channelID = msg.member.voiceState.channelID;
    var connection = await ctx.client.joinVoiceChannel(channelID);

    if (args.length < 1) {
        connection.play(ytdl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

        
    } else {
        connection.play(ytdl(
            args[0],
            {
                filter: "audioonly",
                quality: "highestaudio",
                highWaterMark: 1 << 25
            }
        ));
    }






    connection.once("end", () => {
        connection.disconnect();
    })
})