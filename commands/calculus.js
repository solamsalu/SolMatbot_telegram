const { canUseBot } = require('../utils/canUseBot');

module.exports = (bot) => {
    bot.on('/calculus', async (msg) => {
        const chatId = msg.chat.id;
        if (await canUseBot(msg.from.id, chatId)) {
            sendCalculusMenu(chatId, bot);
        }
    });
};

function sendCalculusMenu(chatId, bot) {
    bot.sendMessage(chatId, "Calculus (Math1002) Chapters and Quizzes:", {
        replyMarkup: bot.inlineKeyboard([
            [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus_ch1' })],
            [bot.inlineButton('Quiz 1: Take Quiz', { callback: '/calculus_quiz1' })],
            [bot.inlineButton('Worksheet 1', { callback: '/calculus_ws1' })],
            // Add more chapters, quizzes, and assignments as needed
        ])
    });
}
