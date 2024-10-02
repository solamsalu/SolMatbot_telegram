// const TeleBot = require('telebot');

// const bot = new TeleBot('');

// // Start command handler
// bot.on('/start', (ctx) => {
//    bot.sendMessage(ctx.chat.id, 'Welcome to SolMat! I can help you with mathematics.\n\nUse /help for a list of commands.');
//  });
 
//  // Help command handler
//  bot.on('/help', (ctx) => {
//    bot.sendMessage(ctx.chat.id, `Available commands:
//    - /start: Get a welcome message
//    - /help: See this message
//    - /chapter1: Access Chapter 1 content
//    - /quiz: Start a quiz
//    - /assignment: Get an assignment
//    - /worksheet: Get a worksheet`);
//  });
 
//  // Chapter content handler
//  bot.on(/^\/chapter(\d+)$/, (ctx) => {
//    // Check if ctx.match exists and contains the chapter number
//    if (ctx.match && ctx.match[1]) {
//      const chapterNumber = parseInt(ctx.match[1]);
//      if (chapterNumber >= 1 && chapterNumber <= 6) {
//        // Respond with the chapter content
//        bot.sendMessage(ctx.chat.id, `Chapter ${chapterNumber}: [Content here]`);
//      } else {
//        bot.sendMessage(ctx.chat.id, 'Invalid chapter number. Please use a valid number (1-6).');
//      }
//    } else {
//      bot.sendMessage(ctx.chat.id, 'Error: Could not process chapter command. Please try again.');
//    }
//  });
 
//  // Quiz command handler
//  bot.on('/quiz', (ctx) => {
//    // Placeholder for quiz logic
//    bot.sendMessage(ctx.chat.id, 'Starting the quiz... [Quiz content here]');
//  });
 
//  // Assignment command handler
//  bot.on('/assignment', (ctx) => {
//    // Placeholder for assignment logic
//    bot.sendMessage(ctx.chat.id, 'Here is your assignment: [Assignment content here]');
//  });
 
//  // Worksheet command handler
//  bot.on('/worksheet', (ctx) => {
//    // Placeholder for worksheet logic
//    bot.sendMessage(ctx.chat.id, 'Here is your worksheet: [Worksheet content here]');
//  });
 
//  // Fallback for unknown commands
//  bot.on('text', (ctx) => {
//    if (ctx && ctx.message && ctx.message.text) {
//      bot.sendMessage(ctx.chat.id, 'Unknown command. Please use /help for a list of available commands.');
//    }
//  });
 
//  // Start the bot
//  bot.start();



const TeleBot = require('telebot');
const axios = require('axios');
const dotenv = require('dotenv');
const { handleError } = require('./utils');

// Load environment variables
dotenv.config();

// Initialize the bot
const bot = new TeleBot(process.env.BOT_TOKEN);

// Import content and quiz links
const chapter1 = require('./content/chapter1.json');
const chapter2 = require('./content/chapter2.json');
const quizLinks = require('./quizzes/quiz1.json');

// Command for /start
bot.on('/start', (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome to the Mathematics Teaching Bot! Use the following commands to get started:\n/chapter1 - Introduction to Algebra\n/chapter2 - Linear Equations\n/quiz1 - Take Chapter 1 Quiz\n/quiz2 - Take Chapter 2 Quiz");
});

// Command for Chapter 1
bot.on('/chapter1', (msg) => {
    bot.sendMessage(msg.chat.id, `${chapter1.title}\n\n${chapter1.content}`);
});

// Command for Chapter 2
bot.on('/chapter2', (msg) => {
    bot.sendMessage(msg.chat.id, `${chapter2.title}\n\n${chapter2.content}`);
});

// Command for Quiz 1
bot.on('/quiz1', (msg) => {
    bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 1: ${quizLinks.chapter1}`);
});

// Command for Quiz 2
bot.on('/quiz2', (msg) => {
    bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 2: ${quizLinks.chapter2}`);
});

// Start the bot
bot.start();
