const { Client, Intents, Message, MessageEmbed } = require('discord.js');

const client = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILDS]});

const prefix = "&";

client.once('ready', () => {
    console.log('Sado is online!');
});

client.on('message', message => {
  switch(message.content.toUpperCase()) {
      case '?RESET':
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
      message.channel.send('chad');
    }
  });

  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login('token'));
}
/*
client.on('guildMemberRemove', async(member) => { 
    const Channel = member.guild.channels.cache.get('759670370558541845')
    Channel.send('**${member.displayName}** has left ${member.guild.name}')
})

*/
client.login('token');

