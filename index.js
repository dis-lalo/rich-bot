const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA0MzkwNDM4NTMwNTgwNDgw.XTtfMQ.znWImRDhB5xgaCEM6sYZ9to4too';

bot.on('ready',() =>{
    console.log('The bot is Online!');
})

bot.on('message', message=>{
    if (message.content === "i want money"){
        message.reply('Fuck You');

}
})

bot.on('message', message=>{
    if(message.content === "No fuck you"){
       message.reply('ok have some money $');
}
})

bot.on('message', message=>{
    if(message.content === "info"){
        message.reply('This bot was created by Superlalo! Version 1.0.0');
}
})
bot.on('message', message=>{
    if(message.content === "$"){
       message.reply('https://www.timothytiah.com/wp-content/uploads/2014/06/money.jpg');
}
})
client.login(process.env.BOT_TOKEN);
