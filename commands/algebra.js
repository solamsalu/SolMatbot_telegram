const canUseBot = require('../utils/canUseBot'); 


module.exports = function(bot) {
   bot.on('/algebra', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Algebra (Math1021) Chapters and Quizzes:", {
               replyMarkup: bot.inlineKeyboard([
                   [bot.inlineButton('Chapter 1: Basic Algebraic Operations', { callback: '/algebra_ch1' })],
                   // More chapters and quizzes here
               ])
           });
       }
   });
};
