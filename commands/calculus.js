
const canUseBot = require('../utils/canUseBot'); 
const textbookLink = "https://drive.google.com/file/d/13GZADLr9sd4FXLKc3vRZus9XXjf-d4SG/view?usp=sharing";

module.exports = (bot) => {
    // Calculus Command
    bot.on('/calculus', async (msg) => {
        const chatId = msg.chat.id;
        try {
            if (await canUseBot(msg.from.id, chatId)) {
                sendCalculusMenu(chatId);
            }
        } catch (error) {
            console.error('Error in /calculus command:', error);
            bot.sendMessage(chatId, 'An error occurred. Please try again later.');
        }
    });

    // Handle callback queries for calculus-related buttons
    bot.on('callbackQuery', async (callbackQuery) => {
        const chatId = callbackQuery.message.chat.id;
        const callbackData = callbackQuery.data;

        try {
            // Handle different callback data
            switch (callbackData) {
                case 'calculus_start':
                    if (await canUseBot(callbackQuery.from.id, chatId)) {
                        sendCalculusMenu(chatId); // Reuse sendCalculusMenu
                    }
                    break;

                


                case '/calculus_ch1':
                    bot.sendMessage(chatId,
                        "Chapter 1: Limits and Continuity\n\n" +
                        "In this chapter, we will explore the foundational concepts of limits and continuity.\n\n" +
                        "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Chapter 1</a>\n" +
                        "Reference: <a href='https://example.com/calculus-ch1'>https://example.com/calculus-ch1</a>\n" +
                        "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>",
                        { parseMode: 'HTML' }
                    );


                    break;
                case '/calculus_quiz1':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/calculus/chapter1");
                    break;
                case '/calculus_ws1':
                    bot.sendMessage(chatId, "Worksheet 1: Linear Algebra for Physics\n\nThis worksheet contains practice problems related to the concepts learned in Chapter 1.\n\nYou can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Linear%20Alg%20for%20Physics%20WS%202.pdf'>Download Worksheet 1</a>", { parseMode: 'HTML' });


                    break;
                case '/calculus_ch2':
                    bot.sendMessage(chatId, "Chapter 2: Derivatives\n\nIn this chapter, we will dive into the concept of derivatives and their applications.\nReference: https://example.com/calculus-ch2\n" +
                    "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>",
                    { parseMode: 'HTML' });

                    break;
                case '/calculus_quiz2':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/calculus/chapter2");
                    break;
                case '/calculus_ws2':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 2: [Link to Worksheet 2]");
                    break;
                case '/calculus_ch3':
                    bot.sendMessage(chatId, "Chapter 3: Limits and Continuity (Advanced)\n\nThis chapter covers advanced topics related to limits and continuity.\nReference: https://example.com/calculus-ch3\n" +
                    "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>",
                    { parseMode: 'HTML' });
                    break;
                case '/calculus_quiz3':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/calculus/chapter3");
                    break;
                case '/calculus_ws3':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 3: [Link to Worksheet 3]");
                    break;
                case '/calculus_ch4':
                    bot.sendMessage(chatId, "Chapter 4: Derivatives (Advanced)\n\nThis chapter explores more complex derivative functions and applications.\nReference: https://example.com/calculus-ch4\n" +
                    "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>",
                    { parseMode: 'HTML' });
                    break;
                case '/calculus_quiz4':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/calculus/chapter4");
                    break;
                case '/calculus_ws4':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 4: [Link to Worksheet 4]");
                    break;
                case '/calculus_as1':
                    bot.sendMessage(chatId,
                        "Assignment 1: Basic Math for NS Assi.\n\n" +
                        "This worksheet covers additional exercises and practice problems related to the concepts learned in Chapter 1 and 2.\n\n" +
                        "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Basic%20Math%20for%20NS%20Assi.%20I%202016.pdf'>Download Assignment 1</a>",
                        { parseMode: 'HTML' }
                    );

                    break;
                case '/calculus_as2':
                    bot.sendMessage(chatId, "Assignment 2: Covers Chapters 3 and 4. [Link to Assignment 2]");
                    break;
                case '/calculus_midExam':
                    bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1 and 2: https://quizizz.com/calculus/midterm");
                    break;
                case '/calculus_finalExam':
                    bot.sendMessage(chatId, "Take the Final Exam for the entire course: https://quizizz.com/calculus/finalexam");
                    break;
            } 

            bot.answerCallbackQuery(callbackQuery.id);
        } catch (error) {
            console.error('Error handling callback query:', error);
            bot.sendMessage(chatId, 'An error occurred while processing your request.');
        }
    });

    // Function to Send Calculus Course Menu
    function sendCalculusMenu(chatId) {
        bot.sendMessage(chatId, "Calculus (Math1002) Chapters and Quizzes:", {
            replyMarkup: bot.inlineKeyboard([
                [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus_ch1' })],
                [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/calculus_quiz1' })],
                [bot.inlineButton('Worksheet 1: Worksheet for Chapter 1', { callback: '/calculus_ws1' })],
                [bot.inlineButton('Chapter 2: Derivatives', { callback: '/calculus_ch2' })],
                [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/calculus_quiz2' })],
                [bot.inlineButton('Worksheet 2: Worksheet for Chapter 2', { callback: '/calculus_ws2' })],
                [bot.inlineButton('Chapter 3: Limits and Continuity', { callback: '/calculus_ch3' })],
                [bot.inlineButton('Quiz 3: Take Quiz', { callback: '/calculus_quiz3' })],
                [bot.inlineButton('Worksheet 3: Worksheet for Chapter 3', { callback: '/calculus_ws3' })],
                [bot.inlineButton('Chapter 4: Derivatives', { callback: '/calculus_ch4' })],
                [bot.inlineButton('Quiz 4: Take Quiz', { callback: '/calculus_quiz4' })],
                [bot.inlineButton('Worksheet 4: Worksheet for Chapter 4', { callback: '/calculus_ws4' })],
                [bot.inlineButton('Assignment 1: Assignment from Chapter 1 and 2', { callback: '/calculus_as1' })],
                [bot.inlineButton('Assignment 2: Assignment from Chapter 3 and 4', { callback: '/calculus_as1' })],
                [bot.inlineButton('Mid Exam', { callback: '/calculus_midExam' })],
                [bot.inlineButton('Final Exam', { callback: '/calculus_finalExam' })],
                [bot.inlineButton('Main Page', { callback: '/start' })]

            ])
        });
    }
};
