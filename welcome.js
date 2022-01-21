const { ReactionCollector } = require("discord.js");

module.exports = client => {
    const channelId = "759670370558541845"; 
    client.on("guildMemberAdd", (member) => {
        console. log(member);
        const joinOptions = [`<@${member.id}> has joined among us!`,
                            `Hey <@${member.id}>! Welcome to the Unswallowed Committee`,
                            `<@${member.id}> joined the server?! LETS GO!!!`,
                            `<@${member.id}> joined the server! Salamat, Thanks!`];

        const message = joinOptions[Math.floor(Math.random() * joinOptions.length)];
      
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message).then(sentMessage => {
            sentMessage.react(client.emojis.cache.find(emoji => emoji.name === "peepoUpvote"))});
    });   
     
    client.on("guildMemberRemove", (member) => {
        console. log(member);
        const leaveOptions = [`<@${member.id}> fell down a hole`,
                                `<@${member.id}> went to play with some other friends`,
                                `All my homies hate <@${member.id}> for leaving the server`,
                                `<@${member.id}> bites the dust. F`]
        const message = leaveOptions[Math.floor(Math.random() * leaveOptions.length)];
      
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message).then(sentMessage => {
            sentMessage.react(client.emojis.cache.find(emoji => emoji.name === "downvote"))});
        
    });   

  };