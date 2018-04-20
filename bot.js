const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'neger') {
    	message.reply('balle');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('Ja ujja');
  	}
});

client.on('message', message => {
    if (message.content === 'Sebbe') {
    	message.reply('Han kanske svarar snart..');
  	}
});

client.on('message', message => {
    if (message.content === '@Sebbe') {
    	message.reply('Han kanske svarar snart..');
  	}
});

client.on('message', message => {
    if (message.content === '@Sebbe#0582') {
    	message.reply('Han kanske svarar snart..');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
