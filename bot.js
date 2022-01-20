
const { Client, Intents, Message, MessageEmbed } = require('discord.js');

const client = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS , Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MEMBERS , Intents.FLAGS.DIRECT_MESSAGE_REACTIONS , Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
client.config = require("./config");
const welcome = require("./welcome");
const prefix = "-";

client.on('ready', () => {
    console.log('Sado is ready to make dosas!');
    welcome(client);
});


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

client.login(client.config.token);

