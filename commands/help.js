const { canUseBot } = require('../utils/canUseBot');

module.exports = (bot) => {
    bot.on('/help', async (msg) => {
        const chatId = msg.chat.id;
        if (await canUseBot(msg.from.id, chatId)) {
            bot.sendMessage(chatId, "Here are the available commands:\n" +
                "/start - Start the bot\n" +
                "/calculus - Access Calculus (Math1002)\n" +
                "/algebra - Access Algebra (Math1021)\n" +
                "/feedback - Share your feedback\n" +
                "/resources - Access useful resources\n" +
                "/discussion - Discussion Forum\n" +
                "/events - View upcoming events\n" +
                "/contact - Contact support\n" +
                "/mathtips - Get math tips\n" +
                "/quizzes - Access quizzes archive");
        }
    });
};
