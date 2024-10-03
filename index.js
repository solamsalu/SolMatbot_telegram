const dotenv = require('dotenv');
dotenv.config();

console.log('All Environment Variables:', process.env); // Debug step
console.log('Bot Token:', process.env.BOT_TOKEN);

const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);

bot.on('text', (msg) => msg.reply.text('Hello!'));
bot.start();

