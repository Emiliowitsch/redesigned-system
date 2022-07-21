const Discord = require("yuuko");
const { default: axios } = require("axios");

var catURL = "https://aws.random.cat/meow";

module.exports = new Discord.Command("cat", (msg, args, ctx) => {
    axios.get(catURL).then(res => {

        msg.channel.createMessage({
            embeds: [{

                title: "Random cat:",
                image: { url: res.data.file }

            }]
        });
    })
})
