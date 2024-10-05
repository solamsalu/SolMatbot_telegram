const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/events', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
       }
   });
};
