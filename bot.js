
const { Client, Intents, Message, MessageEmbed } = require('discord.js');

const client = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS , Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MEMBERS , Intents.FLAGS.DIRECT_MESSAGE_REACTIONS , Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
client.config = require("./config");
const welcome = require("./welcome");
const prefix = "-";

client.on('ready', () => {
    console.log('Sado is online!');
    welcome(client);
});



/*
//added
client.on('guildMemberAdd', async(member) => { 
  const Channel = member.guild.channels.cache.get('759670370558541845')
  Channel.send(`**${member.displayName}** has joined ${member.guild.name}`)
})

//left
client.on('guildMemberRemove', async(member) => { 
  const Channel = member.guild.channels.cache.get('759670370558541845')
  Channel.send(`**${member.displayName}** has left ${member.guild.name}`)
})
*/


client.on('message', message => {
  switch(message.content.toUpperCase()) {
      case '-RESET':
          resetBot(message.channel);
          break;

      // ... other commands
  }
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
  
    if(command === 'sado'){
      message.channel.send('hermano momento');
    }

    if(command === 'waah'){
      message.channel.send(':waaah:');
    }

  });

  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    msg => client.destroy()
    .then(() => client.login(client.config.app.token));
    channel.send('Reset!')
}
/*

//left
client.on("guildMemberRemove", member => {
  const welcome = member.guild.channels.cache.find(channel => channel.name === 'announcements')
  welcome.send (`${member} fell down a hole`)
})

//left
client.on('guildMemberRemove',(member) => {
  client.channels.find('log_channel').send('**${member.username}** has just left server.. Bye Bye')
})

//added
client.on("guildMemberAdd", member => {
  const welcome = member.guild.channels.cache.find(channel => channel.name === 'announcements')
  welcome.send (`${member} is among us`)
})

//added
client.on('guildMemberAdd', member => {
  member.guild.channels.get('759670370558541845').send("Welcome"); 
});

*/
client.login(client.config.app.token);

