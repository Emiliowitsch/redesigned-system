const Discord = require("yuuko");

module.exports = new Discord.Command("help", (msg, args, ctx) => {

    msg.channel.createMessage({
        embeds: [{

            "title": "Commands",
            "color": null,
            "fields": [
                {
                    "name": "!playonce <YouTube Link>",
                    "value": "spielt die Audio des Videos im Voice-Channel ab"
                },
                {
                    "name": "!nick <@Erwähnung> <Nickname>",
                    "value": "ändert den Nicknamen des angegebenen Nutzers"
                },
                {
                    "name": "!nickall <Nickname>",
                    "value": "ändert den Nicknamen aller Nutzer"
                },
                {
                    "name": "!spam <Anzahl Nachrichten> <Nachricht>",
                    "value": "versendet beliebig viele Nachrichten im aktuellen Kanal"
                },
                {
                    "name": "!cat",
                    "value": "zeigt ein zufälliges Katzenbild"
                },
                {
                    "name": "!dog",
                    "value": "zeigt ein zufälliges Hundebild/-video"
                }
            ]

        }]
    });

})
