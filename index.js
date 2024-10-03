const TeleBot = require('telebot');

// Set the BOT_TOKEN directly
const BOT_TOKEN = 7639349507:AAEMg5R2hjjFZv1ByT_1aDZeNR9kY_Wc460; // Replace with your actual bot token

const bot = new TeleBot(BOT_TOKEN);

console.log('Bot Token:', BOT_TOKEN); // Check if token is loaded correctly

bot.on('text', (msg) => msg.reply.text('Hello!'));
bot.start();
