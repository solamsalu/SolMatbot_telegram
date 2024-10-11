const isMemberOfGroup = require('./isMemberOfGroup');

module.exports = async function canUseBot(bot, userId, chatId) {
    const isMember = await isMemberOfGroup(userId);
    if (!isMember) {
        bot.sendMessage(chatId, 'You must be a member of the discussion group to use this bot. Join here: https://t.me/+1IJOyAA5CGM4YzJk');
        return false;
    }
    return true;
};
