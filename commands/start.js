const { canUseBot } = require('../utils/canUseBot');

module.exports = (bot) => {
    bot.on('/start', async (msg) => {
        if (await canUseBot(msg.from.id, msg.chat.id)) {
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
