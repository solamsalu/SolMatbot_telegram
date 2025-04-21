const axios = require('axios');
// const BOT_TOKEN = '7639349507:AAEMg5R2hjjFZv1ByT_1aDZeNR9kY_Wc460';
const groupChatId = -1002323508017;

module.exports = async function isMemberOfGroup(userId) {
    try {
        const res = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getChatMember`, {
            params: { chat_id: groupChatId , user_id: userId }
        });
        const memberStatus = res.data?.result?.status;
        return ['member', 'administrator', 'creator'].includes(memberStatus);
    } catch (error) {
        console.error('Error checking group membership:', error);
        return false;
    }
};
