// const welcome = require("./config.json');

module.exports = client => {
  const channelId = "759670370558541845"; 
  client.on("guildMemberAdd", (member) => {
      console. log(member);
      const message = ' Welcome <@${member.id}> to our server!';
    
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
      
  });           
};
