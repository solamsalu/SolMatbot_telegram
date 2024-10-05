const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/mathtips', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Math Tip: Always double-check your calculations!");
       }
   });
};
