const canUseBot = require('../utils/canUseBot'); 
module.exports = function(bot) {
   bot.on('/quizzes', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Here are the available quizzes:\n1. Quiz 1: Algebra\n2. Quiz 2: Linear Equations");
       }
   });
};
