const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();
const prefix = process.env.PREFIX;

bot.on('ready', () => {
    console.log('This bot is online');
});

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'picks':
            const embed = new Discord.MessageEmbed()
            .setColor(0xcdff05)
            .setTitle('NFL Week 2 Slate')
            .setAuthor('TSP Sports Pick\'s', 'https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png', 'https://discord.js.org')
            .setThumbnail('https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png')
            .addField('TR', 'CIN +3', true)
            .addField('SUN', 'WAS +1\nPHI +3\nDET +2', true)
            .addField('MON', 'WAS +1', true)
            .setImage('https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png')
            .setTimestamp()
            .setFooter(`- TSP`, 'https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png');
            message.channel.send(embed);
            break;
    }
});

bot.login(process.env.CLIENT_TOKEN);