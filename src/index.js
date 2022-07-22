const Discord = require("yuuko");
const Path = require("path");
const ytdl = require("ytdl-core");
const { config } = require("process");
const { VoiceConnection, Message, Command } = require("eris");

require("ffmpeg-inject");
require("dotenv").config();

var client = new Discord.Client({
    token: process.env.TOKEN,
    prefix: "!",
    intents: [
        "guilds",
        "guildBans",
        "guildEmojisAndStickers",
        "guildIntegrations",
        "guildWebhooks",
        "guildPresences",
        "guildInvites",
        "guildVoiceStates",
        "guildMessages",
        "guildMessageReactions",
        "guildMessageTyping",
        "directMessages",
        "directMessageReactions",
        "directMessageTyping",

        "guildMembers",
    ]
});



client.addDir(Path.join(__dirname, "commands"))
client.addDir(Path.join(__dirname, "events"))

client.connect();

process.on('uncaughtException', console.log);

// async function playAudio(connection, msg, ctx) {

//     var serverID = msg.guildID;
//     var ytID = ctx.playlist[serverID][0];

//     try {
//         connection.play(ytdl(
//             `https://www.youtube.com/watch?v=${ytID}`,
//             {
//                 filter: "audioonly",
//                 quality: "highestaudio",
//                 highWaterMark: 1 << 25
//             }
//         ));


//         connection.once("end", () => {
//             ctx.playlist[serverID].slice(1);
//             if (ctx.playlist[serverID].length < 1) {
//                 connection.disconnect();
//             } else {
//                 playAudio(connection, msg, ctx);
//             }

//         })

//     } catch (e) {
//         ctx.playlist[serverID].slice(1);
//         if (ctx.playlist[serverID].length < 1) {
//             connection.disconnect();
//         } else {
//             playAudio(connection, msg, ctx);
//         }

//     }
// }

// client.extendContext({
//     playlist: {},
//     playAudio
// })