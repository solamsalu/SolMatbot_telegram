module.exports = function(bot) {
   bot.on('/feedback', async (msg) => {
       const chatId = msg.chat.id;
       if (await canUseBot(msg.from.id, chatId)) {
           bot.sendMessage(chatId, "Please share your feedback or suggestions:");
           // Feedback logic here
       }
   });
};
