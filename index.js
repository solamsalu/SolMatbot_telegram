// index.js
require('dotenv').config(); // Load .env file

const TeleBot = require('telebot'); // Assuming you already have this import
const BOT_TOKEN = process.env.BOT_TOKEN; // Use the token from the .env file

const bot = new TeleBot(BOT_TOKEN);

// Your existing bot code...

bot.start();
