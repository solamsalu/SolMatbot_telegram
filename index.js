// const TeleBot = require('telebot');
// const axios = require('axios');
// const dotenv = require('dotenv');
// const { handleError } = require('./utils');

// // Load environment variables
// dotenv.config();

// // Initialize the bot (using object config)
// const bot = new TeleBot({
//     token: process.env.BOT_TOKEN
// });

// // Discussion group chat ID (replace with your actual chat ID)
// const groupChatId = -1002323508017;

// // Function to check if user is in the discussion group
// async function isMemberOfGroup(userId) {
//     try {
//         const res = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`, {
//             params: {
//                 chat_id: groupChatId,
//                 user_id: userId
//             }
//         });
//         const memberStatus = res.data?.result?.status;
//         return ['member', 'administrator', 'creator'].includes(memberStatus);
//     } catch (error) {
//         console.error('Error checking group membership:', error);
//         return false;
//     }
// }

// // Function to check if a user is eligible to use the bot
// async function canUseBot(userId, chatId) {
//     const isMember = await isMemberOfGroup(userId);
//     if (!isMember) {
//         bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
//         return false;
//     }
//     return true;
// }

// // Command for /start
// bot.on('/start', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:
//         /chapter1 - Algebra
//         /quiz1 - Take Quiz 1
//         /chapter2 - Linear Equations
//         /quiz2 - Take Quiz 2
//         /chapter3 - Calculus
//         /quiz3 - Take Quiz 3
//         /chapter4 - Probability
//         /quiz4 - Take Quiz 4
//         /chapter5 - Statistics
//         /quiz5 - Take Quiz 5
//         /chapter6 - Geometry
//         /quiz6 - Take Quiz 6
//         /assignment1 - View Assignment 1
//         /assignment2 - View Assignment 2
//         /finalexam - Take the Model Final Exam`);
//     }
// });

// // Chapter Commands
// bot.on('/chapter1', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, "Chapter 1: Introduction to Algebra\n\nIn this chapter, we will learn about variables, equations, and basic algebraic operations.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//     }
// });

// bot.on('/chapter2', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn about linear equations and their applications.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//     }
// });

// // Add similar commands for all other chapters

// // Quizzes
// const quizLinks = {
//     chapter1: "https://quizizz.com/join/quiz-id1",
//     chapter2: "https://quizizz.com/join/quiz-id2",
//     chapter3: "https://quizizz.com/join/quiz-id3",
//     chapter4: "https://quizizz.com/join/quiz-id4",
//     chapter5: "https://quizizz.com/join/quiz-id5",
//     chapter6: "https://quizizz.com/join/quiz-id6",
//     assignment1: "https://assignment1-link",
//     assignment2: "https://assignment2-link",
//     finalExam: "https://finalexam-link"
// };

// // Quiz Command
// bot.on('/quiz1', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 1: ${quizLinks.chapter1}`);
//     }
// });

// bot.on('/quiz2', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 2: ${quizLinks.chapter2}`);
//     }
// });


// bot.on('/quiz3', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 3: ${quizLinks.chapter3}`);
//     }
// });

// bot.on('/quiz4', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 4: ${quizLinks.chapter4}`);
//     }
// });

// bot.on('/quiz5', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the quiz for Chapter 5: ${quizLinks.chapter5}`);
//     }
// });

// // Add similar quiz commands for other chapters

// // Assignments Command
// bot.on('/assignment1', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Assignment for Chapter 1 & 2: ${quizLinks.assignment1}`);
//     }
// });

// bot.on('/assignment2', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Assignment for Chapter 3 & 4: ${quizLinks.assignment2}`);
//     }
// });
// // Final Exam Command
// bot.on('/finalexam', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Take the final exam here: ${quizLinks.finalExam}`);
//     }
// });

// // Start the bot
// bot.start();






// const TeleBot = require('telebot');
// const axios = require('axios');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();

// // Initialize the bot
// const bot = new TeleBot({
//     token: process.env.BOT_TOKEN
// });

// // Discussion group chat ID (replace with your actual chat ID)
// const groupChatId = -1002323508017;

// // Example quiz links (replace with actual links)
// const quizLinks = {
//     chapter1: "https://quizizz.com/join/quiz-id1",
//     chapter2: "https://quizizz.com/join/quiz-id2",
//     chapter3: "https://quizizz.com/join/quiz-id3",
//     chapter4: "https://quizizz.com/join/quiz-id4",
//     chapter5: "https://quizizz.com/join/quiz-id5",
//     chapter6: "https://quizizz.com/join/quiz-id6",
//     assignment1: "https://assignment1-link",
//     assignment2: "https://assignment2-link",
//     finalExam: "https://finalexam-link"
// };

// // Function to check if user is in the discussion group
// async function isMemberOfGroup(userId) {
//     try {
//         const res = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`, {
//             params: {
//                 chat_id: groupChatId,
//                 user_id: userId
//             }
//         });
//         const memberStatus = res.data?.result?.status;
//         return ['member', 'administrator', 'creator'].includes(memberStatus);
//     } catch (error) {
//         console.error('Error checking group membership:', error);
//         return false;
//     }
// }

// // Function to check if a user is eligible to use the bot
// async function canUseBot(userId, chatId) {
//     const isMember = await isMemberOfGroup(userId);
//     if (!isMember) {
//         await bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
//         return false;
//     }
//     return true;
// }

// // Command for /start
// bot.on('/start', async (msg) => {
//     try {
//         if (await canUseBot(msg.from.id, msg.chat.id)) {
//             await bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the buttons below to get started:`, {
//                 replyMarkup: bot.inlineKeyboard([
//                     [bot.inlineButton('Chapter 1: Algebra', { callback: 'chapter1' })],
//                     [bot.inlineButton('Quiz 1: Take Quiz', { callback: 'quiz1' })],
//                     [bot.inlineButton('Chapter 2: Linear Equations', { callback: 'chapter2' })],
//                     [bot.inlineButton('Quiz 2: Take Quiz', { callback: 'quiz2' })],
//                     [bot.inlineButton('Chapter 3: Algebra', { callback: 'chapter3' })],
//                     [bot.inlineButton('Assignment 1: Assignment form Chapters 1, 2, 3', { callback: 'assignment1' })],
//                     [bot.inlineButton('Quiz 3: Take Quiz', { callback: 'quiz3' })],
//                     [bot.inlineButton('Chapter 4: Linear Equations', { callback: 'chapter4' })],
//                     [bot.inlineButton('Quiz 4: Take Quiz', { callback: 'quiz4' })],
//                     [bot.inlineButton('Chapter 5: Algebra', { callback: 'chapter5' })],
//                     [bot.inlineButton('Quiz 5: Take Quiz', { callback: 'quiz5' })],
//                     [bot.inlineButton('Chapter 6: Linear Equations', { callback: 'chapter6' })],
//                     [bot.inlineButton('Quiz 6: Take Quiz', { callback: 'quiz6' })],
//                     [bot.inlineButton('Assignment 2: Assignment form Chapters 4, 5, 6', { callback: 'assignment2' })],
//                     [bot.inlineButton('Final Exam: Take the Model Final Exam', { callback: 'finalExam' })],
//                     // Add more buttons as needed
//                 ])
//             });
//         }
//     } catch (error) {
//         console.error('Error in /start command:', error);
//         await bot.sendMessage(msg.chat.id, 'An error occurred while processing your request. Please try again later.');
//     }
// });

// // Add callback listeners for the buttons
// bot.on('callbackQuery', async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             switch (data) {
//                 case 'chapter1':
//                     await bot.sendMessage(chatId, "Chapter 1: Introduction to Algebra\n\nIn this chapter, we will learn about variables, equations, and basic algebraic operations.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//                     break;
//                 case 'quiz1':
//                     await bot.sendMessage(chatId, `Take the quiz for Chapter 1: ${quizLinks.chapter1}`);
//                     break;
//                 case 'chapter2':
//                     await bot.sendMessage(chatId, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn about linear equations and their applications.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//                     break;
//                 case 'quiz2':
//                     await bot.sendMessage(chatId, `Take the quiz for Chapter 2: ${quizLinks.chapter2}`);
//                     break;

//                     case 'finalExam':
//                         await bot.sendMessage(chatId, `Take the Model Final Exam: ${quizLinks.finalExam}`);
//                         break;
//                 // Add more cases for other chapters and quizzes
//                 default:
//                     await bot.sendMessage(chatId, "Unknown command.");
//             }
//         }
//     } catch (error) {
//         console.error('Error handling callback query:', error);
//         await bot.sendMessage(chatId, 'An error occurred while processing your request. Please try again later.');
//     }
// });

// // Start the bot
// bot.start();



// const TeleBot = require('telebot'); 
// const axios = require('axios');
// const dotenv = require('dotenv');
// const { handleError } = require('./utils');

// // Load environment variables
// dotenv.config();

// // Initialize the bot (using object config)
// const bot = new TeleBot({
//     token: process.env.BOT_TOKEN
// });

// // Discussion group chat ID (replace with your actual chat ID)
// const groupChatId = -1002323508017;

// // Function to check if user is in the discussion group
// async function isMemberOfGroup(userId) {
//     try {
//         const res = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`, {
//             params: {
//                 chat_id: groupChatId,
//                 user_id: userId
//             }
//         });
//         const memberStatus = res.data?.result?.status;
//         return ['member', 'administrator', 'creator'].includes(memberStatus);
//     } catch (error) {
//         console.error('Error checking group membership:', error);
//         return false;
//     }
// }

// // Function to check if a user is eligible to use the bot
// async function canUseBot(userId, chatId) {
//     const isMember = await isMemberOfGroup(userId);
//     if (!isMember) {
//         bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
//         return false;
//     }
//     return true;
// }

// // Command for /start
// bot.on('/start', async (msg) => {
//     if (await canUseBot(msg.from.id, msg.chat.id)) {
//         bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`,
//             {
//                 replyMarkup: bot.inlineKeyboard([
//                     [bot.inlineButton('Chapter 1: Algebra', { callback: '/chapter1' })],
//                     [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/quiz1' })],
//                     [bot.inlineButton('Chapter 2: Linear Equations', { callback: '/chapter2' })],
//                     [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/quiz2' })],
//                     [bot.inlineButton('Help', { callback: '/help' })],
//                     [bot.inlineButton('Feedback', { callback: '/feedback' })],
//                     [bot.inlineButton('Resources', { callback: '/resources' })],
//                     [bot.inlineButton('Daily Math Problem', { callback: '/dailyproblem' })],
//                     [bot.inlineButton('Upcoming Events', { callback: '/events' })],
//                     [bot.inlineButton('Contact Support', { callback: '/contact' })],
//                     [bot.inlineButton('Math Tips', { callback: '/mathtips' })],
//                     [bot.inlineButton('Quizzes Archive', { callback: '/quizzes' })]
//                 ])
//             });
//     }
// });

// // Add callback listeners for the buttons
// bot.on('callbackQuery', async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     if (await canUseBot(msg.from.id, chatId)) {
//         switch (data) {
//             case '/chapter1':
//                 bot.sendMessage(chatId, "Chapter 1: Introduction to Algebra\n\nIn this chapter, we will learn about variables, equations, and basic algebraic operations.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//                 break;
//             case '/quiz1':
//                 bot.sendMessage(chatId, `Take the quiz for Chapter 1: ${quizLinks.chapter1}`);
//                 break;
//             case '/chapter2':
//                 bot.sendMessage(chatId, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn about linear equations and their applications.\nReference: https://example.com/reference-material\nTextbook: https://example.com/textbook");
//                 break;
//             case '/quiz2':
//                 bot.sendMessage(chatId, `Take the quiz for Chapter 2: ${quizLinks.chapter2}`);
//                 break;
//             case '/help':
//                 bot.sendMessage(chatId, "Here are the available commands:\n" +
//                     "/start - Start the bot\n" +
//                     "/chapter1 - Learn about Chapter 1: Algebra\n" +
//                     "/quiz1 - Take Quiz 1\n" +
//                     "/chapter2 - Learn about Chapter 2: Linear Equations\n" +
//                     "/quiz2 - Take Quiz 2\n" +
//                     "/feedback - Share your feedback\n" +
//                     "/resources - Access useful resources\n" +
//                     "/dailyproblem - Get a daily math problem\n" +
//                     "/events - View upcoming events\n" +
//                     "/contact - Contact support\n" +
//                     "/mathtips - Get math tips\n" +
//                     "/quizzes - Access quizzes archive");
//                 break;
//             case '/feedback':
//                 bot.sendMessage(chatId, "Please share your feedback or suggestions:");
//                 // You can implement further functionality to handle user feedback here.
//                 break;
//             case '/resources':
//                 bot.sendMessage(chatId, "Here are some useful resources:\n" +
//                     "1. Online Textbook: [Link]\n" +
//                     "2. Tutorial Videos: [Link]\n");
//                 break;
//             case '/dailyproblem':
//                 bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
//                 // You can implement further functionality to send different problems daily.
//                 break;
//             case '/events':
//                 bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
//                 break;
//             case '/contact':
//                 bot.sendMessage(chatId, "You can contact support at: support@example.com");
//                 break;
//             case '/mathtips':
//                 bot.sendMessage(chatId, "Tip: Always check your work! Double-check calculations and answers.");
//                 break;
//             case '/quizzes':
//                 bot.sendMessage(chatId, "Here are the available quizzes:\n1. Quiz 1: Algebra\n2. Quiz 2: Linear Equations");
//                 break;
//         }
//     }
// });

// // Start the bot
// bot.start();


console.log('Bot Token:', process.env.BOT_TOKEN);

const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
bot.on('text', (msg) => msg.reply.text('Hello!'));
bot.start();
