module.exports = {
    name: 'sado',
    description: "ask what sado is doing",
    execute(message, args){
        const sadoOptions = ["Sado is making some dosas. Leave him alone",
                            "Chad",
                            "SIUUUUUUUUU",
                            "Sado is training",
                            "Sado is having tea right now",
                            "https://giffiles.alphacoders.com/138/13815.gif",
                            "https://c.tenor.com/YXkNDKQBHTgAAAAd/chad-attacks-nothing-sado-yasutora.gif",
                            "Stop bothering Sado",
                            "Go back to work"];
        var sadoPicks = Math.floor(Math.random() * sadoOptions.length);
        const sadoSays = sadoOptions[sadoPicks];
        message.channel.send(sadoSays);
    }
}