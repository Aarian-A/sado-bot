module.exports = client => {
    const channelId = "759670370558541845"; 
    client.on("guildMemberAdd", (member) => {
        console. log(member);
        const message = `<@${member.id}> has joined among us!`;
      
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
        
    });   
     
    client.on("guildMemberRemove", (member) => {
        console. log(member);
        const message = `The imposter <@${member.id}> was ejected!`;
      
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(message);
        
    });   

  };