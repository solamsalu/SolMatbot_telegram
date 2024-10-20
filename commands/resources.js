const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/resources', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Here are some useful resources:\n1. Online Textbook: [Link]\n2. Tutorial Videos: [Link]");
       }
   });
};
