module.exports = {
    name: 'pain',
    description: "everything is pain",
    execute(message, args, client){
        const waaah = client.emojis.cache.find(emoji => emoji.name === "waaah");
        message.channel.send(`${waaah}`);
    }
}