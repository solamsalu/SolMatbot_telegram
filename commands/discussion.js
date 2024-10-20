const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   // Handle the /discussion command
   bot.on('/discussion', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, `Join the discussion here: [Discussion Forum](https://t.me/+1IJOyAA5CGM4YzJk)`, { parse_mode: 'Markdown' });
       }
   });

   // Handle callback queries for the discussion button
   bot.on('callbackQuery', async (callbackQuery) => {
       const chatId = callbackQuery.message.chat.id;
       const callbackData = callbackQuery.data;

       try {
           // Handle the discussion button callback
           if (callbackData === 'discussion_button') {
               const canUse = await canUseBot(callbackQuery.from.id, chatId);
               if (canUse) {
                   bot.sendMessage(chatId, `Join the discussion here: [Discussion Forum](https://t.me/+1IJOyAA5CGM4YzJk)`, { parse_mode: 'Markdown' });
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
