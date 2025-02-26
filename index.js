// deploy using render
const express = require('express');
const TeleBot = require('telebot');
const axios = require('axios');
const BOT_TOKEN = '7639349507:AAEMg5R2hjjFZv1ByT_1aDZeNR9kY_Wc460'; 
// const BOT_TOKEN = '8067898750:AAHCJ5KkxulAd3ERtx7BhyzjZ7ucJkut2Vc';
const app = express();
const bot = new TeleBot(BOT_TOKEN);

// Discussion group chat ID (replace with your actual chat ID)
const groupChatId = -1002323508017;

// Function to check if user is in the discussion group
async function isMemberOfGroup(userId) {
    try {
        const res = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember`, {
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
async function canUseBot(bot, userId, chatId) {
    const isMember = await isMemberOfGroup(userId);
    if (!isMember) {
        const botUsername = (await bot.getMe()).username;
        const deepLink = `https://t.me/${botUsername}`;
        bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
        return false;
    }
    return true;
}

bot.on('text', async (msg) => {
    const userId = msg.from.id;
    const chatId = msg.chat.id;

    // Check if the user is a member of the group
    if (!(await canUseBot(bot, userId, chatId))) {
        return;
    }

});



// Import command handlers
require('./commands/start')(bot);
require('./commands/help')(bot);
require('./commands/calculus1')(bot);
// require('./commands/calculus')(bot);
require('./commands/appliedMathIII')(bot);
require('./commands/algebra')(bot);
require('./commands/feedback')(bot);
require('./commands/resources')(bot);
require('./commands/discussion')(bot);
require('./commands/events')(bot);
require('./commands/dailyproblem')(bot);
require('./commands/contact')(bot);
require('./commands/mathtips')(bot);
require('./commands/quizzes')(bot);

// require('./callbackHandler')(bot, canUseBot);
bot.start();


const PORT = process.env.PORT || 3000; // Use Render's port or fallback to 3000

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






// const TeleBot = require('telebot'); 
// const axios = require('axios');
// const { handleError } = require('./utils');

// // Use the token directly
// const BOT_TOKEN = '7639349507:AAEMg5R2hjjFZv1ByT_1aDZeNR9kY_Wc460'; 


// // Initialize the bot with the direct token
// const bot = new TeleBot(BOT_TOKEN);

// // Discussion group chat ID (replace with your actual chat ID)
// const groupChatId = -1002323508017;

// // Function to check if user is in the discussion group
// async function isMemberOfGroup(userId) {
//     try {
//         const res = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/getChatMember`, {
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
//         bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`, {
//             replyMarkup: bot.inlineKeyboard([
//                 [bot.inlineButton('📘 Calculus (Math1002)', { callback: '/calculus' })],
//                 [bot.inlineButton('📗 Algebra (Math1021)', { callback: '/algebra' })],
//                 [bot.inlineButton('💬 Discussion Forum', { callback: '/discussion' })],
//                 [bot.inlineButton('📅 Upcoming Events', { callback: '/events' })],
//                 [bot.inlineButton('🧮 Daily Math Problem', { callback: '/dailyproblem' })],
//                 [bot.inlineButton('📞 Contact Support', { callback: '/contact' })],
//                 [bot.inlineButton('❓ Help', { callback: '/help' })]
//             ])
//         });
//     }
// });

// bot.on('/algebra', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             sendAlgebraMenu(chatId);
//         }
//     } catch (error) {
//         console.error('Error in /algebra command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // Command for /calculus
// bot.on('/calculus', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             sendCalculusMenu(chatId);
//         }
//     } catch (error) {
//         console.error('Error in /calculus command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // Command for /help
// bot.on('/help', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             bot.sendMessage(chatId, "Here are the available commands:\n" +
//                 "/start - Start the bot\n" +
//                 "/calculus - Access Calculus (Math1002)\n" +
//                 "/algebra - Access Algebra (Math1021)\n" +
//                 "/feedback - Share your feedback\n" +
//                 "/resources - Access useful resources\n" +
//                 "/dailyproblem - Get a daily math problem\n" +
//                 "/discussion - Discussion Forum\n" +
//                 "/events - View upcoming events\n" +
//                 "/contact - Contact support\n" +
//                 "/mathtips - Get math tips\n" +
//                 "/quizzes - Access quizzes archive");
//         }
//     } catch (error) {
//         console.error('Error in /help command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // Command for /feedback
// bot.on('/feedback', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             bot.sendMessage(chatId, "Please share your feedback or suggestions:");
//             // Implement feedback handling logic here
//         }
//     } catch (error) {
//         console.error('Error in /feedback command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // Command for /resources
// bot.on('/contact', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             bot.sendMessage(chatId, "You can contact support at: [Contact Support](https://t.me/BarokMat)", { parseMode: 'MarkdownV2' });
//         }
//     } catch (error) {
//         console.error('Error in /contact command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // Command for /discussion
// bot.on('/discussion', async (msg) => {
//     const chatId = msg.chat.id;
//     try {
//         if (await canUseBot(msg.from.id, chatId)) {
//             bot.sendMessage(chatId, `Welcome to the discussion forum! Feel free to ask questions or share your thoughts. Join the discussion forum here: [Discussion Forum](https://t.me/+1IJOyAA5CGM4YzJk)`, { parseMode: 'Markdown' });
//         }
//     } catch (error) {
//         console.error('Error in /discussion command:', error);
//         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//     }
// });

// // CallbackQuery listener
// bot.on('callbackQuery', async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     if (await canUseBot(msg.from.id, chatId)) {
//         switch (data) {
//             case '/calculus':
//                 sendCalculusMenu(chatId);
//                 break;
//             case '/algebra':
//                 sendAlgebraMenu(chatId);
//                 break;
//             case '/help':
//                 bot.sendMessage(chatId, "Here are the available commands:\n" +
//                     "/start - Start the bot\n" +
//                     "/calculus - Access Calculus (Math1002)\n" +
//                     "/algebra - Access Algebra (Math1021)\n" +
//                     "/feedback - Share your feedback\n" +
//                     "/resources - Access useful resources\n" +
//                     "/dailyproblem - Get a daily math problem\n" +
//                     "/discussion - Discussion Forum\n" +
//                     "/events - View upcoming events\n" +
//                     "/contact - Contact support\n" +
//                     "/mathtips - Get math tips\n" +
//                     "/quizzes - Access quizzes archive");
//                 break;
//             case '/feedback':
//                 bot.sendMessage(chatId, "Please share your feedback or suggestions:");
//                 // Implement feedback handling
//                 break;
//             case '/resources':
//                 bot.sendMessage(chatId, "Here are some useful resources:\n" +
//                     "1. Online Textbook: [Link]\n" +
//                     "2. Tutorial Videos: [Link]");
//                 break;
//             case '/dailyproblem':
//                 bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
//                 // Implement daily problem generation
//                 break;
//             case '/discussion':
//                 bot.sendMessage(chatId, `Welcome to the discussion forum! Feel free to ask questions or share your thoughts. Join the discussion forum here: [Discussion Forum](https://t.me/+1IJOyAA5CGM4YzJk)`, { parseMode: 'Markdown' });
//                 break;
//             case '/events':
//                 bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
//                 break;
//             case '/contact':
//                 bot.sendMessage(chatId, "You can contact support at: [Contact Support](https://t.me/BarokMat)", { parseMode: 'MarkdownV2' });
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

// // Send the Calculus course menu
// function sendCalculusMenu(chatId) {
//     bot.sendMessage(chatId, "Calculus (Math1002) Chapters and Quizzes:", {
//         replyMarkup: bot.inlineKeyboard([
//             [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus_ch1' })],
//             [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/calculus_quiz1' })],
//             [bot.inlineButton('Worksheet 1: Worksheet for Chapter 1', { callback: '/calculus_ws1' })],
//             [bot.inlineButton('Chapter 2: Derivatives', { callback: '/calculus_ch2' })],
//             [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/calculus_quiz2' })],
//             [bot.inlineButton('Worksheet 2: Worksheet for Chapter 2', { callback: '/calculus_ws2' })],
//             [bot.inlineButton('Chapter 3: Limits and Continuity', { callback: '/calculus_ch3' })],
//             [bot.inlineButton('Quiz 3: Take Quiz', { callback: '/calculus_quiz3' })],
//             [bot.inlineButton('Worksheet 3: Worksheet for Chapter 3', { callback: '/calculus_ws3' })],
//             [bot.inlineButton('Chapter 4: Derivatives', { callback: '/calculus_ch4' })],
//             [bot.inlineButton('Quiz 4: Take Quiz', { callback: '/calculus_quiz4' })],
//             [bot.inlineButton('Worksheet 4: Worksheet for Chapter 4', { callback: '/calculus_ws4' })],
//             [bot.inlineButton('Assignment 1: Assignment from Chapter 1 and 2', { callback: '/calculus_as1' })],
//             [bot.inlineButton('Assignment 2: Assignment from Chapter 3 and 4', { callback: '/calculus_as1' })],
//             [bot.inlineButton('Mid Exam', { callback: '/calculus_midExam' })],
//             [bot.inlineButton('Final Exam', { callback: '/calculus_finalExam' })]
//         ])
//     });
// }

// // Send the Algebra course menu
// // Send the Algebra course menu
// function sendAlgebraMenu(chatId) {
//     bot.sendMessage(chatId, "Algebra (Math1021) Chapters and Quizzes:", {
//         replyMarkup: bot.inlineKeyboard([
//             [bot.inlineButton('Chapter 1: Basic Algebraic Operations', { callback: '/algebra_ch1' })],
//             [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/algebra_quiz1' })],
//             [bot.inlineButton('Worksheet 1: Worksheet for Chapter 1', { callback: '/algebra_ws1' })],
//             [bot.inlineButton('Chapter 2: Linear Equations', { callback: '/algebra_ch2' })],
//             [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/algebra_quiz2' })],
//             [bot.inlineButton('Worksheet 2: Worksheet for Chapter 2', { callback: '/algebra_ws2' })],
//             [bot.inlineButton('Chapter 3: Polynomials', { callback: '/algebra_ch3' })],
//             [bot.inlineButton('Quiz 3: Take Quiz', { callback: '/algebra_quiz3' })],
//             [bot.inlineButton('Worksheet 3: Worksheet for Chapter 3', { callback: '/algebra_ws3' })],
//             [bot.inlineButton('Chapter 4: Factoring', { callback: '/algebra_ch4' })],
//             [bot.inlineButton('Quiz 4: Take Quiz', { callback: '/algebra_quiz4' })],
//             [bot.inlineButton('Worksheet 4: Worksheet for Chapter 4', { callback: '/algebra_ws4' })],
//             [bot.inlineButton('Assignment 1: Assignment from Chapter 1 and 2', { callback: '/algebra_as1' })],
//             [bot.inlineButton('Assignment 2: Assignment from Chapter 3 and 4', { callback: '/algebra_as2' })],
//             [bot.inlineButton('Mid Exam', { callback: '/algebra_midExam' })],
//             [bot.inlineButton('Final Exam', { callback: '/algebra_finalExam' })]
//         ])
//     });
// }


// // Further callbacks for Calculus chapters and quizzes
// bot.on('callbackQuery', async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     if (await canUseBot(msg.from.id, chatId)) {
//         switch (data) {
//             case '/calculus_ch1':
//                 bot.sendMessage(chatId, 
//                     "Chapter 1: Limits and Continuity\n\n" +
//                     "In this chapter, we will explore the foundational concepts of limits and continuity.\n\n" +
//                     "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Chapter 1</a>\n" +
//                     "Reference: <a href='https://example.com/calculus-ch1'>https://example.com/calculus-ch1</a>\n" +
//                     "Textbook: <a href='https://example.com/calculus-textbook'>https://example.com/calculus-textbook</a>", 
//                     { parseMode: 'HTML' }
//                 );
                

//                 break;
//             case '/calculus_quiz1':
//                 bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/calculus/chapter1");
//                 break;
//             case '/calculus_ws1':
//                 bot.sendMessage(chatId, "Worksheet 1: Linear Algebra for Physics\n\nThis worksheet contains practice problems related to the concepts learned in Chapter 1.\n\nYou can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Linear%20Alg%20for%20Physics%20WS%202.pdf'>Download Worksheet 1</a>", { parseMode: 'HTML' });


//                 break;
//             case '/calculus_ch2':
//                 bot.sendMessage(chatId, "Chapter 2: Derivatives\n\nIn this chapter, we will dive into the concept of derivatives and their applications.\nReference: https://example.com/calculus-ch2\nTextbook: https://example.com/calculus-textbook");
//                 break;
//             case '/calculus_quiz2':
//                 bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/calculus/chapter2");
//                 break;
//             case '/calculus_ws2':
//                 bot.sendMessage(chatId, "Here is the worksheet for Chapter 2: [Link to Worksheet 2]");
//                 break;
//             case '/calculus_ch3':
//                 bot.sendMessage(chatId, "Chapter 3: Limits and Continuity (Advanced)\n\nThis chapter covers advanced topics related to limits and continuity.\nReference: https://example.com/calculus-ch3\nTextbook: https://example.com/calculus-textbook");
//                 break;
//             case '/calculus_quiz3':
//                 bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/calculus/chapter3");
//                 break;
//             case '/calculus_ws3':
//                 bot.sendMessage(chatId, "Here is the worksheet for Chapter 3: [Link to Worksheet 3]");
//                 break;
//             case '/calculus_ch4':
//                 bot.sendMessage(chatId, "Chapter 4: Derivatives (Advanced)\n\nThis chapter explores more complex derivative functions and applications.\nReference: https://example.com/calculus-ch4\nTextbook: https://example.com/calculus-textbook");
//                 break;
//             case '/calculus_quiz4':
//                 bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/calculus/chapter4");
//                 break;
//             case '/calculus_ws4':
//                 bot.sendMessage(chatId, "Here is the worksheet for Chapter 4: [Link to Worksheet 4]");
//                 break;
//             case '/calculus_as1':
//                 bot.sendMessage(chatId, 
//                     "Assignment 1: Basic Math for NS Assi.\n\n" +
//                     "This worksheet covers additional exercises and practice problems related to the concepts learned in Chapter 1 and 2.\n\n" +
//                     "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Basic%20Math%20for%20NS%20Assi.%20I%202016.pdf'>Download Assignment 1</a>", 
//                     { parseMode: 'HTML' }
//                 );
                
//                 break;
//             case '/calculus_as2':
//                 bot.sendMessage(chatId, "Assignment 2: Covers Chapters 3 and 4. [Link to Assignment 2]");
//                 break;
//             case '/calculus_midExam':
//                 bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1 and 2: https://quizizz.com/calculus/midterm");
//                 break;
//             case '/calculus_finalExam':
//                 bot.sendMessage(chatId, "Take the Final Exam for the entire course: https://quizizz.com/calculus/finalexam");
//                 break;
//         }
//     }
// });

// // Further callbacks for Algebra chapters and quizzes
// bot.on('callbackQuery', async (msg) => {
//     const chatId = msg.message.chat.id;
//     const data = msg.data;

//     if (await canUseBot(msg.from.id, chatId)) {
//         switch (data) {
            // case '/algebra_ch1':
            //     bot.sendMessage(chatId, "Chapter 1: Basic Algebraic Operations\n\nIn this chapter, we will cover basic algebraic operations like addition, subtraction, and multiplication of algebraic expressions.\nReference: https://example.com/algebra-ch1\nTextbook: https://example.com/algebra-textbook");
            //     break;
            // case '/algebra_quiz1':
            //     bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/algebra/chapter1");
            //     break;
            // case '/algebra_ws1':
            //     bot.sendMessage(chatId, "Here is the worksheet for Chapter 1: [Link to Worksheet 1]");
            //     break;
            // case '/algebra_ch2':
            //     bot.sendMessage(chatId, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn how to solve linear equations and their applications.\nReference: https://example.com/algebra-ch2\nTextbook: https://example.com/algebra-textbook");
            //     break;
            // case '/algebra_quiz2':
            //     bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/algebra/chapter2");
            //     break;
            // case '/algebra_ws2':
            //     bot.sendMessage(chatId, "Here is the worksheet for Chapter 2: [Link to Worksheet 2]");
            //     break;
            // case '/algebra_ch3':
            //     bot.sendMessage(chatId, "Chapter 3: Polynomials\n\nIn this chapter, we will explore the properties and operations of polynomials.\nReference: https://example.com/algebra-ch3\nTextbook: https://example.com/algebra-textbook");
            //     break;
            // case '/algebra_quiz3':
            //     bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/algebra/chapter3");
            //     break;
            // case '/algebra_ws3':
            //     bot.sendMessage(chatId, "Here is the worksheet for Chapter 3: [Link to Worksheet 3]");
            //     break;
            // case '/algebra_ch4':
            //     bot.sendMessage(chatId, "Chapter 4: Factoring\n\nThis chapter covers factoring techniques used in solving algebraic equations.\nReference: https://example.com/algebra-ch4\nTextbook: https://example.com/algebra-textbook");
            //     break;
            // case '/algebra_quiz4':
            //     bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/algebra/chapter4");
            //     break;
            // case '/algebra_ws4':
            //     bot.sendMessage(chatId, "Here is the worksheet for Chapter 4: [Link to Worksheet 4]");
            //     break;
            // case '/algebra_as1':
            //     bot.sendMessage(chatId, "Assignment 1: Covers Chapters 1 and 2. [Link to Assignment 1]");
            //     break;
            // case '/algebra_as2':
            //     bot.sendMessage(chatId, "Assignment 2: Covers Chapters 3 and 4. [Link to Assignment 2]");
            //     break;
            // case '/algebra_midExam':
            //     bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1 and 2: https://quizizz.com/algebra/midterm");
            //     break;
            // case '/algebra_finalExam':
            //     bot.sendMessage(chatId, "Take the Final Exam for the entire course: https://quizizz.com/algebra/calculus");
            //     break;
//         }
//     }
// });

// // Start the bot
// bot.start();
