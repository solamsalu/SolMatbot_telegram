const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   bot.on('/discussion', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, `Join the discussion here: [Discussion Forum](https://t.me/+1IJOyAA5CGM4YzJk)`);
       }
   });
};
