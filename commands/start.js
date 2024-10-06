// const canUseBot = require('../utils/canUseBot'); 
// module.exports = function(bot) {
//     bot.on('/start', async (msg) => {
//         const canUse = await canUseBot(msg.from.id, msg.chat.id);
//         if (canUse) {
//             bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`, {
//                 replyMarkup: bot.inlineKeyboard([
//                     [bot.inlineButton('📘 Calculus (Math1002)', { callback: 'calculus_start' })],
//                     [bot.inlineButton('📗 Algebra (Math1021)', { callback: '/algebra' })],
//                     [bot.inlineButton('💬 Discussion Forum', { callback: '/discussion' })],
//                     [bot.inlineButton('📅 Upcoming Events', { callback: '/events' })],
//                     [bot.inlineButton('🧮 Daily Math Problem', { callback: '/dailyproblem' })],
//                     [bot.inlineButton('📞 Contact Support', { callback: '/contact' })],
//                     [bot.inlineButton('❓ Help', { callback: '/help' })]
//                 ])
//             });
//         }
//     });

//  }


const canUseBot = require('../utils/canUseBot'); 

// Export a function that receives 'bot'
module.exports = (bot) => {
    bot.on('/start', async (msg) => {
        if (await canUseBot(msg.from.id, msg.chat.id)) {
            bot.sendMessage(msg.chat.id, `Welcome to the Mathematics Teaching Bot! Use the following commands to get started:`, {
                replyMarkup: bot.inlineKeyboard([
                    [bot.inlineButton('📘 Calculus (Math1002)', { callback: 'calculus_start' })],
                    [bot.inlineButton('📗 Algebra (Math1021)', { callback: 'algebra_start' })],
                    [bot.inlineButton('💬 Discussion Forum', { callback: 'discussion_button' })],
                    [bot.inlineButton('📅 Upcoming Events', { callback: 'events_button' })],
                    [bot.inlineButton('🧮 Daily Math Problem', { callback: 'daily_problem_button' })],
                    [bot.inlineButton('📞 Contact Support', { callback: 'contact_button' })],
                    [bot.inlineButton('❓ Help', { callback: 'help_button' })]
                ])
            });
        }
    });
};
