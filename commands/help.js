const canUseBot = require('../utils/canUseBot'); 

module.exports = function(bot) {
   // Function to send help information
   const sendHelpMessage = (chatId) => {
       bot.sendMessage(chatId, "Here are the available commands:\n" +
           "/start - Start the bot\n" +
           "/calculus1 - Access Calculus I (Math2021)\n" +
        //    "/calculus - Access Calculus (Math1002)\n" +
           "/algebra - Access Algebra (Math1021)\n" +
        //    "/feedback - Share your feedback\n" +
        //    "/resources - Access useful resources\n" +
           "/discussion - Discussion Forum\n" +
           "/events - View upcoming events\n" +
           "/contact - Contact support");
        //    "/mathtips - Get math tips\n" +
        //    "/quizzes - Access quizzes archive"
       
   };

   // Handle the /help command
   bot.on('/help', async (msg) => {
       const canUse = await canUseBot(msg.from.id, msg.chat.id);
       if (canUse) {
           sendHelpMessage(msg.chat.id);
       } else {
           bot.sendMessage(msg.chat.id, "You do not have permission to use this bot.");
       }
   });

   // Handle callback queries for Help button
   bot.on('callbackQuery', async (callbackQuery) => {
       const chatId = callbackQuery.message.chat.id;
       const callbackData = callbackQuery.data;

       try {
           // Handle Help button callback
           if (callbackData === 'help_button') {
               const canUse = await canUseBot(callbackQuery.from.id, chatId);
               if (canUse) {
                   sendHelpMessage(chatId);
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
