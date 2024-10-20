const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   // Handle the /events command
   bot.on('/events', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
       }
   });

   // Handle callback queries for the events button
   bot.on('callbackQuery', async (callbackQuery) => {
       const chatId = callbackQuery.message.chat.id;
       const callbackData = callbackQuery.data;

       try {
           // Handle the events button callback
           if (callbackData === 'events_button') {
               const canUse = await canUseBot(callbackQuery.from.id, chatId);
               if (canUse) {
                   bot.sendMessage(chatId, "Upcoming events:\n1. Math Webinar on October 15th\n2. Algebra Workshop on October 20th");
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
