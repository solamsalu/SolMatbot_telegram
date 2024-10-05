const canUseBot = require('../utils/canUseBot'); 


module.exports = function(bot) {
   bot.on('/contact', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "You can contact support at: [Contact Support](https://t.me/BarokMat)", { parseMode: 'MarkdownV2' });
       }
   });
};
