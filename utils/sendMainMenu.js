// utils/sendMainMenu.js

const sendMainMenu = (bot, chatId) => {
   return bot.sendMessage(chatId, `<b>Welcome to the Mathematics Teaching Bot!</b>\nUse the following commands to get started:`, {
       replyMarkup: bot.inlineKeyboard([
           [bot.inlineButton('📘 Calculus I (Math2021)', { callback: 'calculus1_start' })],
           [bot.inlineButton('📗 Algebra (Math1021)', { callback: 'algebra_start' })],
           [bot.inlineButton('📗 Applied Math III (Math2072)', { callback: 'appliedmath3_start' })],
           [bot.inlineButton('💬 Discussion Forum', { callback: 'discussion_button' })],
           [bot.inlineButton('📅 Upcoming Events', { callback: 'events_button' })],
           [bot.inlineButton('🧮 Daily Math Problem', { callback: 'daily_problem_button' })],
           [bot.inlineButton('📞 Contact Support', { callback: 'contact_button' })],
           [bot.inlineButton('❓ Help', { callback: 'help_button' })]
       ]),
       parseMode: 'HTML'
   });
};

module.exports = sendMainMenu;
