module.exports = {
    name: 'genshit',
    description: "genshin bad",
    execute(message, args, client){
        const genOptions = [`${client.emojis.cache.find(emoji => emoji.name === "qiqifallen")}`,
                            `${client.emojis.cache.find(emoji => emoji.name === "pepeDoom")}`,
                            "https://tenor.com/view/genshin-gif-18672434",
                            "https://tenor.com/view/childe-tartaglia-genshin-genshin-impact-genshin-impact-childe-gif-22479576",
                            "https://tenor.com/view/genshin-impact-gif-24534282",
                            "https://tenor.com/view/genshin-impact-albedo-albedo-genshin-impact-albedo-genshin-trash-gif-24301771"];
        
        const bruh = genOptions[Math.floor(Math.random() * genOptions.length)];
        message.channel.send(bruh);
    }
}