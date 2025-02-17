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


// const canUseBot = require('../utils/canUseBot'); 

// module.exports = (bot) => {
//     bot.on('/start', async (msg) => {
//         if (await canUseBot(msg.from.id, msg.chat.id)) {
//             bot.sendMessage(msg.chat.id, `<b>Welcome to the Mathematics Teaching Bot!</b>\nUse the following commands to get started:`, {
//                 replyMarkup: bot.inlineKeyboard([
//                     [bot.inlineButton('📘 Calculus I (Math2021)', { callback: 'calculus1_start' })],
//                     // [bot.inlineButton('📘 Calculus (Math1002)', { callback: 'calculus_start' })],
//                     [bot.inlineButton('📗 Algebra (Math1021)', { callback: 'algebra_start' })],
//                     [bot.inlineButton('💬 Discussion Forum', { callback: 'discussion_button' })],
//                     [bot.inlineButton('📅 Upcoming Events', { callback: 'events_button' })],
//                     [bot.inlineButton('🧮 Daily Math Problem', { callback: 'daily_problem_button' })],
//                     [bot.inlineButton('📞 Contact Support', { callback: 'contact_button' })],
//                     [bot.inlineButton('❓ Help', { callback: 'help_button' })]
//                 ]),
//                 parseMode: 'HTML' // Specify parse mode as HTML
//             });
//         }
//     });
// };


const canUseBot = require('../utils/canUseBot');

module.exports = (bot) => {
    bot.on('/start', async (msg) => {
        const userId = msg.from.id; // Get user ID
        const chatId = msg.chat.id; // Get chat ID
        
        const canUse = await canUseBot(bot, userId, chatId); // Check if the user can use the bot
        if (canUse) {
            bot.sendMessage(chatId, `<b>Welcome to the Mathematics Teaching Bot!</b>\nUse the following commands to get started:`, {
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
                parseMode: 'HTML' // Specify parse mode as HTML
            });
        }
    });
};



// const canUseBot = require('../utils/canUseBot');
// const sendMainMenu = require('../utils/sendMainMenu');

// module.exports = (bot) => {
//     bot.on('/start', async (msg) => {
//         const userId = msg.from.id;
//         const chatId = msg.chat.id;
        
//         const canUse = await canUseBot(bot, userId, chatId); // Check if user can use the bot
//         if (canUse) {
//             await sendMainMenu(bot, chatId); // Send the main menu
//         }
//     });
// };
