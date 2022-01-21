//discord.js required for bot to function
const { Client, Intents, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const client = new Client({intents : [Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS , 
  Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MEMBERS , Intents.FLAGS.DIRECT_MESSAGE_REACTIONS , 
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

client.config = require("./config");
const welcome = require("./welcome");
const fs = require('fs');

//bot prefix for commands
const prefix = "-";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

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
      client.commands.get('sado').execute(message, args);
    }
    if(command === 'pain'){
      client.commands.get('pain').execute(message, args, client);
    }

  });

  function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    msg => client.destroy()
    .then(() => client.login(client.config.app.token));
    channel.send('Reset!')
}

client.login(client.config.token);

