client.on('guildMemberRemove', async(member) => { 
    const Channel = member.guild.channels.cache.get('759670370558541845')
    Channel.send('**${member.displayName}** has left ${member.guild.name}')
})
