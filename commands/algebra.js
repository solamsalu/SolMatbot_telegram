
const canUseBot = require('../utils/canUseBot');

module.exports = (bot) => {
    // Calculus Command
    bot.on('/algebra', async (msg) => {
        const chatId = msg.chat.id;
        try {
            if (await canUseBot(msg.from.id, chatId)) {
                sendAlgebraMenu(chatId);
            }
        } catch (error) {
            console.error('Error in /algebra command:', error);
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
                case 'algebra_start':
                    if (await canUseBot(callbackQuery.from.id, chatId)) {
                        sendAlgebraMenu(chatId); // Reuse sendAlgebraMenu(
                    }
                    break;

                case '/algebra_ch1':
                    bot.sendMessage(chatId, "Chapter 1: Basic Algebraic Operations\n\nIn this chapter, we will cover basic algebraic operations like addition, subtraction, and multiplication of algebraic expressions.\nReference: https://example.com/algebra-ch1\nTextbook: https://example.com/algebra-textbook");
                    break;
                case '/algebra_quiz1':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/algebra/chapter1");
                    break;
                case '/algebra_ws1':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 1: [Link to Worksheet 1]");
                    break;
                case '/algebra_ch2':
                    bot.sendMessage(chatId, "Chapter 2: Linear Equations\n\nIn this chapter, we will learn how to solve linear equations and their applications.\nReference: https://example.com/algebra-ch2\nTextbook: https://example.com/algebra-textbook");
                    break;
                case '/algebra_quiz2':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/algebra/chapter2");
                    break;
                case '/algebra_ws2':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 2: [Link to Worksheet 2]");
                    break;
                case '/algebra_ch3':
                    bot.sendMessage(chatId, "Chapter 3: Polynomials\n\nIn this chapter, we will explore the properties and operations of polynomials.\nReference: https://example.com/algebra-ch3\nTextbook: https://example.com/algebra-textbook");
                    break;
                case '/algebra_quiz3':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/algebra/chapter3");
                    break;
                case '/algebra_ws3':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 3: [Link to Worksheet 3]");
                    break;
                case '/algebra_ch4':
                    bot.sendMessage(chatId, "Chapter 4: Factoring\n\nThis chapter covers factoring techniques used in solving algebraic equations.\nReference: https://example.com/algebra-ch4\nTextbook: https://example.com/algebra-textbook");
                    break;
                case '/algebra_quiz4':
                    bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/algebra/chapter4");
                    break;
                case '/algebra_ws4':
                    bot.sendMessage(chatId, "Here is the worksheet for Chapter 4: [Link to Worksheet 4]");
                    break;
                case '/algebra_as1':
                    bot.sendMessage(chatId, "Assignment 1: Covers Chapters 1 and 2. [Link to Assignment 1]");
                    break;
                case '/algebra_as2':
                    bot.sendMessage(chatId, "Assignment 2: Covers Chapters 3 and 4. [Link to Assignment 2]");
                    break;
                case '/algebra_midExam':
                    bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1 and 2: https://quizizz.com/algebra/midterm");
                    break;
                case '/algebra_finalExam':
                    bot.sendMessage(chatId, "Take the Final Exam for the entire course: https://quizizz.com/algebra/calculus");
                    break;
            }

            bot.answerCallbackQuery(callbackQuery.id);
        } catch (error) {
            console.error('Error handling callback query:', error);
            bot.sendMessage(chatId, 'An error occurred while processing your request.');
        }
    });

    // Function to Send Algebra Course Menu
    function sendAlgebraMenu(chatId) {
        bot.sendMessage(chatId, "Algebra (Math1021) Chapters and Quizzes:", {
            replyMarkup: bot.inlineKeyboard([
                [bot.inlineButton('Chapter 1: Basic Algebraic Operations', { callback: '/algebra_ch1' })],
                [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/algebra_quiz1' })],
                [bot.inlineButton('Worksheet 1: Worksheet for Chapter 1', { callback: '/algebra_ws1' })],
                [bot.inlineButton('Chapter 2: Linear Equations', { callback: '/algebra_ch2' })],
                [bot.inlineButton('Quiz 2: Take Quiz', { callback: '/algebra_quiz2' })],
                [bot.inlineButton('Worksheet 2: Worksheet for Chapter 2', { callback: '/algebra_ws2' })],
                [bot.inlineButton('Chapter 3: Polynomials', { callback: '/algebra_ch3' })],
                [bot.inlineButton('Quiz 3: Take Quiz', { callback: '/algebra_quiz3' })],
                [bot.inlineButton('Worksheet 3: Worksheet for Chapter 3', { callback: '/algebra_ws3' })],
                [bot.inlineButton('Chapter 4: Factoring', { callback: '/algebra_ch4' })],
                [bot.inlineButton('Quiz 4: Take Quiz', { callback: '/algebra_quiz4' })],
                [bot.inlineButton('Worksheet 4: Worksheet for Chapter 4', { callback: '/algebra_ws4' })],
                [bot.inlineButton('Assignment 1: Assignment from Chapter 1 and 2', { callback: '/algebra_as1' })],
                [bot.inlineButton('Assignment 2: Assignment from Chapter 3 and 4', { callback: '/algebra_as2' })],
                [bot.inlineButton('Mid Exam', { callback: '/algebra_midExam' })],
                [bot.inlineButton('Final Exam', { callback: '/algebra_finalExam' })]
            ])
        });
    }

};
