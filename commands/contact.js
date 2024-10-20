const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   // Handle the /contact command
   bot.on('/contact', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "You can contact support at: [Contact Support](https://t.me/BarokMat)", { parse_mode: 'Markdown' });
       }
   });

   // Handle callback queries for the contact button
   bot.on('callbackQuery', async (callbackQuery) => {
       const chatId = callbackQuery.message.chat.id;
       const callbackData = callbackQuery.data;

       try {
           // Handle the contact button callback
           if (callbackData === 'contact_button') {
               const canUse = await canUseBot(callbackQuery.from.id, chatId);
               if (canUse) {
                   bot.sendMessage(chatId, "You can contact support at: [Contact Support](https://t.me/BarokMat)", { parse_mode: 'Markdown' });
               }
           }

           // Acknowledge the callback query
           bot.answerCallbackQuery(callbackQuery.id);
       } catch (error) {
           console.error('Error handling callback query:', error);
           bot.sendMessage(chatId, 'An error occurred while processing your request.');
       }
   });
};
