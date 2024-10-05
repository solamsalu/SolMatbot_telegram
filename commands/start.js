// const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/start', async (msg) => {
       const canUse = await canUseBot(msg.from.id, msg.chat.id);
       if (canUse) {
           bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`, {
               replyMarkup: bot.inlineKeyboard([
                   [bot.inlineButton('Calculus (Math1002)', { callback: '/calculus' })],
                   [bot.inlineButton('Algebra (Math1021)', { callback: '/algebra' })],
                   [bot.inlineButton('Help', { callback: '/help' })],
                   [bot.inlineButton('Feedback', { callback: '/feedback' })],
                   [bot.inlineButton('Resources', { callback: '/resources' })],
                   [bot.inlineButton('Discussion Forum', { callback: '/discussion' })],
                   [bot.inlineButton('Upcoming Events', { callback: '/events' })],
                   [bot.inlineButton('Contact Support', { callback: '/contact' })],
                   [bot.inlineButton('Math Tips', { callback: '/mathtips' })],
                   [bot.inlineButton('Quizzes Archive', { callback: '/quizzes' })]
               ])
           });
       }
   });
};


// CallbackQuery listener
const canUseBot = require('../utils/canUseBot');

module.exports = function(bot) {
    bot.on('callbackQuery', async (msg) => {
        const chatId = msg.message.chat.id;
        const data = msg.data;

        if (await canUseBot(msg.from.id, chatId)) {
            switch (data) {
                case '/calculus':
                    bot.sendMessage(chatId, 'You selected Calculus (Math1002).');
                    break;
                case '/algebra':
                    bot.sendMessage(chatId, 'You selected Algebra (Math1021).');
                    break;
                case '/help':
                    bot.sendMessage(chatId, "Here are the available commands:\n" +
                        "/start - Start the bot\n" +
                        "/calculus - Access Calculus (Math1002)\n" +
                        "/algebra - Access Algebra (Math1021)\n" +
                        "/feedback - Share your feedback\n" +
                        "/resources - Access useful resources\n" +
                        "/dailyproblem - Get a daily math problem\n" +
                        "/discussion - Discussion Forum\n" +
                        "/events - View upcoming events\n" +
                        "/contact - Contact support\n" +
                        "/mathtips - Get math tips\n" +
                        "/quizzes - Access quizzes archive");
                    break;
                case '/feedback':
                    bot.sendMessage(chatId, "Please share your feedback or suggestions:");
                    break;
                case '/resources':
                    bot.sendMessage(chatId, "Here are some useful resources:\n" +
                        "1. Online Textbook: [Link]\n" +
                        "2. Tutorial Videos: [Link]");
                    break;
                case '/dailyproblem':
                    bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
                    break;
                case '/discussion':
                    bot.sendMessage(chatId, `Welcome to the discussion forum! Feel free to ask questions or share your thoughts. Join the discussion forum here: Discussion Forum`, { parseMode: 'Markdown' });
                    break;
                case '/events':
                    bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
                    break;
                case '/contact':
                    bot.sendMessage(chatId, "You can contact support at: Contact Support", { parseMode: 'MarkdownV2' });
                    break;
                case '/mathtips':
                    bot.sendMessage(chatId, "Tip: Always check your work! Double-check calculations and answers.");
                    break;
                case '/quizzes':
                    bot.sendMessage(chatId, "Here are the available quizzes:\n1. Quiz 1: Algebra\n2. Quiz 2: Calculus");
                    break;
                default:
                    bot.sendMessage(chatId, 'Unknown command.');
            }
        }
    });
};
