const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   // Handle the /dailyproblem command
   bot.on('/dailyproblem', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
       }
   });

   // Handle callback queries for the daily problem button
   bot.on('callbackQuery', async (callbackQuery) => {
       const chatId = callbackQuery.message.chat.id;
       const callbackData = callbackQuery.data;

       try {
           // Handle the daily problem button callback
           if (callbackData === 'daily_problem_button') {
               const canUse = await canUseBot(callbackQuery.from.id, chatId);
               if (canUse) {
                   bot.sendMessage(chatId, "Today's math problem: What is 12 + 15?");
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
