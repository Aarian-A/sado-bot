const Discord = require('discord.js');

const client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] })

const prefix = "&";

client.once('ready', () => {
    console.log('Sado is online!');
});

client.on('guildMemberRemove', async(member) => { 
    const Channel = member.guild.channels.cache.get('759670370558541845')
    Channel.send('**${member.displayName}** has left ${member.guild.name}')
})

client.login('token goes here');
