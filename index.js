const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();
const prefix = process.env.PREFIX;

bot.on('ready', () => {
    console.log('This bot is online');
});

bot.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if (command === 'embed') {
		const embed = new Discord.MessageEmbed()
		.setColor(0x79E621)
		.setDescription(args.join(" "))
		.setAuthor('TSP Sports Pick\'s', 'https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png')
		.setThumbnail('https://i.ibb.co/NSqWPZ1/tspyellow2stroke.png')
        message.channel.send(embed);
	}
});

bot.login(process.env.CLIENT_TOKEN);