const Discord = require("yuuko");
const { default: axios } = require("axios");

var dogURL = "https://random.dog/woof";

module.exports = new Discord.Command("dog", (msg, args, ctx) => {
    axios.get(dogURL).then(res => {

        msg.channel.createMessage("https://random.dog/" + res.data);

    })
})
