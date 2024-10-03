
const TeleBot = require('telebot'); 
const axios = require('axios');
const { handleError } = require('./utils');

const BOT_TOKEN = '7639349507:AAEMg5R2hjjFZv1ByT_1aDZeNR9kY_Wc460'; 


// Initialize the bot (using object config)
const bot = new TeleBot({
    token: process.env.BOT_TOKEN
});

// Discussion group chat ID (replace with your actual chat ID)
const groupChatId = -1002323508017;

// Function to check if user is in the discussion group
async function isMemberOfGroup(userId) {
    try {
        const res = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`, {
            params: {
                chat_id: groupChatId,
                user_id: userId
            }
        });
        const memberStatus = res.data?.result?.status;
        return ['member', 'administrator', 'creator'].includes(memberStatus);
    } catch (error) {
        console.error('Error checking group membership:', error);
        return false;
    }
}

// Function to check if a user is eligible to use the bot
async function canUseBot(userId, chatId) {
    const isMember = await isMemberOfGroup(userId);
    if (!isMember) {
        bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
        return false;
    }
    return true;
}

// Command for /start
bot.on('/start', async (msg) => {
    if (await canUseBot(msg.from.id, msg.chat.id)) {
        bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`,
            {
                replyMarkup: bot.inlineKeyboard([
                    [bot.inlineButton('Chapter 1: Algebra', { callback: '/chapter1' })],
                    [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/quiz1' })],
                    [bot.inlineButton('Chapter 2: Linear Equations', { callback: '/chapter2' })],
                    [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/quiz2' })],
                    [bot.inlineButton('Help', { callback: '/help' })],
                    [bot.inlineButton('Feedback', { callback: '/feedback' })],
                    [bot.inlineButton('Resources', { callback: '/resources' })],
                    [bot.inlineButton('Daily Math Problem', { callback: '/dailyproblem' })],
                    [bot.inlineButton('Upcoming Events', { callback: '/events' })],
                    [bot.inlineButton('Contact Support', { callback: '/contact' })],
                    [bot.inlineButton('Math Tips', { callback: '/mathtips' })],
                    [bot.inlineButton('Quizzes Archive', { callback: '/quizzes' })]
                ])
            });
    }
});

// Add callback listeners for the buttons
bot.on('callbackQuery', async (msg) => {
    const chatId = msg.message.chat.id;
    const data = msg.data;

    if (await canUseBot(msg.from.id, chatId)) {
        switch (data) {
            case '/chapter1':
                bot.sendMessage(chatId, "Chapter 1: Introduction to Algebra\n\nIn this chapter, we will learn about variables, equations, and basic algebraic operations.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
                break;
            case '/quiz1':
                bot.sendMessage(chatId, `Take the quiz for Chapter 1: ${quizLinks.chapter1}`);
                break;
            case '/chapter2':
                bot.sendMessage(chatId, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn about linear equations and their applications.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
                break;
            case '/quiz2':
                bot.sendMessage(chatId, `Take the quiz for Chapter 2: ${quizLinks.chapter2}`);
                break;
            case '/help':
                bot.sendMessage(chatId, "Here are the available commands:\n" +
                    "/start - Start the bot\n" +
                    "/chapter1 - Learn about Chapter 1: Algebra\n" +
                    "/quiz1 - Take Quiz 1\n" +
                    "/chapter2 - Learn about Chapter 2: Linear Equations\n" +
                    "/quiz2 - Take Quiz 2\n" +
                    "/feedback - Share your feedback\n" +
                    "/resources - Access useful resources\n" +
                    "/dailyproblem - Get a daily math problem\n" +
                    "/events - View upcoming events\n" +
                    "/contact - Contact support\n" +
                    "/mathtips - Get math tips\n" +
                    "/quizzes - Access quizzes archive");
                break;
            case '/feedback':
                bot.sendMessage(chatId, "Please share your feedback or suggestions:");
                // You can implement further functionality to handle user feedback here.
                break;
            case '/resources':
                bot.sendMessage(chatId, "Here are some useful resources:\n" +
                    "1. Online Textbook: [Link]\n" +
                    "2. Tutorial Videos: [Link]\n");
                break;
            case '/dailyproblem':
                bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
                // You can implement further functionality to send different problems daily.
                break;
            case '/events':
                bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
                break;
            case '/contact':
                bot.sendMessage(chatId, "You can contact support at: support@example.com");
                break;
            case '/mathtips':
                bot.sendMessage(chatId, "Tip: Always check your work! Double-check calculations and answers.");
                break;
            case '/quizzes':
                bot.sendMessage(chatId, "Here are the available quizzes:\n1. Quiz 1: Algebra\n2. Quiz 2: Linear Equations");
                break;
        }
    }
});

// Start the bot
bot.start();