const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/calculus', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Calculus (Math1002) Chapters and Quizzes:", {
               replyMarkup: bot.inlineKeyboard([
                   [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus_ch1' })],
                   // More chapters and quizzes here
               ])
           });
       }
   });
};


