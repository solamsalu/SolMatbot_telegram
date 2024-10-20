// const canUseBot = require('../utils/canUseBot');

// module.exports = (bot) => {
//    // Command to initiate Calculus 1
//    bot.on('/calculus1', async (msg) => {
//       const chatId = msg.chat.id;
//       try {
//          if (await canUseBot(msg.from.id, chatId)) {
//             sendCalculus1Menu(chatId);
//          }
//       } catch (error) {
//          console.error('Error in /calculus1 command:', error);
//          bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//       }
//    });

   // // Callback Query Handler
   // bot.on('callbackQuery', async (callbackQuery) => {
   //    const chatId = callbackQuery.message.chat.id;
   //    const callbackData = callbackQuery.data;

   //    switch (callbackData) {
   //       case 'calculus1_start':
   //          if (await canUseBot(callbackQuery.from.id, chatId)) {
   //             sendCalculus1Menu(chatId); // Reuse sendCalculus1Menu
   //          }
   //          break;

   //       case '/calculus1_ch1_menu':
   //          bot.sendMessage(chatId,
   //             "📘 **Chapter 1: Limits and Continuity**\n\n" +
   //             "In this chapter, we will explore the foundational concepts of limits and continuity.\n\n" +
   //             "You can download the PDF here: [Download Chapter 1](https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf)\n" +
   //             "Reference: [Calculus Chapter 1](https://example.com/calculus-ch1)\n" +
   //             "Textbook: [Calculus Textbook](https://example.com/calculus-textbook)\n\n" +
   //             "Please choose one of the following options:", {
                  // parse_mode: 'Markdown',
                  // reply_markup: {
                     // inline_keyboard: [
                        // [{ text: '📄 Download Chapter 1 Note', callback_data: 'calculus1_ch1_note' }],
                        // [{ text: '📝 Take Quiz 1', callback_data: 'calculus1_quiz1' }],
                        // [{ text: '📂 Download Worksheet 1', callback_data: 'calculus1_ws1' }]
                     // ]
                  // }
            //    });
            // break;

         // case 'calculus1_ch2_menu':
         //    bot.sendMessage(chatId,
         //       "📘 **Chapter 2: Derivatives**\n\n" +
         //       "In this chapter, we will dive into the concept of derivatives and their applications.\n\n" +
         //       "Reference: [Calculus Chapter 2](https://example.com/calculus-ch2)\n" +
         //       "Textbook: [Calculus Textbook](https://example.com/calculus-textbook)\n\n" +
         //       "Please choose one of the following options:", {
         //          parse_mode: 'Markdown',
         //          reply_markup: {
         //             inline_keyboard: [
         //                [{ text: '📄 Download Chapter 2 Note', callback_data: 'calculus1_ch2_note' }],
         //                [{ text: '📝 Take Quiz 2', callback_data: 'calculus1_quiz2' }],
         //                [{ text: '📂 Download Worksheet 2', callback_data: 'calculus1_ws2' }]
         //             ]
         //          }
         //       });
         //    break;

         // case 'calculus1_ch3_menu':
         //    bot.sendMessage(chatId,
         //       "📘 **Chapter 3: Applications of Derivatives**\n\n" +
         //       "This chapter focuses on the various applications of derivatives.\n\n" +
         //       "Reference: [Calculus Chapter 3](https://example.com/calculus-ch3)\n" +
         //       "Textbook: [Calculus Textbook](https://example.com/calculus-textbook)\n\n" +
         //       "Please choose one of the following options:", {
         //          parse_mode: 'Markdown',
         //          reply_markup: {
         //             inline_keyboard: [
         //                [{ text: '📄 Download Chapter 3 Note', callback_data: 'calculus1_ch3_note' }],
         //                [{ text: '📝 Take Quiz 3', callback_data: 'calculus1_quiz3' }],
         //                [{ text: '📂 Download Worksheet 3', callback_data: 'calculus1_ws3' }]
         //             ]
         //          }
         //       });
         //    break;

         // case 'calculus1_ch4_menu':
         //    bot.sendMessage(chatId,
         //       "📘 **Chapter 4: Integrals**\n\n" +
         //       "In this chapter, you’ll dive into integrals and their applications.\n\n" +
         //       "Reference: [Calculus Chapter 4](https://example.com/calculus-ch4)\n" +
         //       "Textbook: [Calculus Textbook](https://example.com/calculus-textbook)\n\n" +
         //       "Please choose one of the following options:", {
         //          parse_mode: 'Markdown',
         //          reply_markup: {
         //             inline_keyboard: [
         //                [{ text: '📄 Download Chapter 4 Note', callback_data: 'calculus1_ch4_note' }],
         //                [{ text: '📝 Take Quiz 4', callback_data: 'calculus1_quiz4' }],
         //                [{ text: '📂 Download Worksheet 4', callback_data: 'calculus1_ws4' }]
         //             ]
         //          }
         //       });
         //    break;

//          default:
//             bot.sendMessage(chatId, "Unknown command. Please try again.");
//       }

//       bot.answerCallbackQuery(callbackQuery.id);
//    });

//    // Function to Send Calculus1 Course Menu
//    function sendCalculus1Menu(chatId) {
//       bot.sendMessage(chatId, "Calculus I (Math2021) Chapters and Quizzes:", {
//          reply_markup: {
//             inline_keyboard: [
//                // [{ text: 'Course Outline', callback_data: '/calculus1_outline' }],
//                // [{ text: 'Pre-Course Assessment Exam', callback_data: '/calculus1_pre_assessment' }],
//                [{ text: 'Chapter 1: Limits and Continuity', callback_data: '/calculus1_ch1_menu' }],
//                [{ text: 'Chapter 2: Derivatives', callback_data: 'calculus1_ch2_menu' }],
//                [{ text: 'Chapter 3: Applications of Derivatives', callback_data: 'calculus1_ch3_menu' }],
//                [{ text: 'Chapter 4: Integrals', callback_data: 'calculus1_ch4_menu' }]
//             ]
//          }
//       });
//    }
// };


// const canUseBot = require('../utils/canUseBot');

// module.exports = (bot) => {
//    // Calculus1 Command
//    bot.on('/calculus1', async (msg) => {
//       const chatId = msg.chat.id;
//       try {
//          if (await canUseBot(msg.from.id, chatId)) {
//             sendCalculus1Menu(chatId);
//          }
//       } catch (error) {
//          console.error('Error in /calculus1 command:', error);
//          bot.sendMessage(chatId, 'An error occurred. Please try again later.');
//       }
//    });

//    // Centralized Chapter Menu Handling
//    const chapterData = {
//       '/calculus1_ch1_menu': {
//          title: 'Limits and Continuity',
//          description: 'This chapter introduces the concept of limits, how functions behave as inputs approach specific values, and how continuity can be defined. You\'ll learn fundamental ideas that set the groundwork for derivatives and integrals.',
//          noteCallback: '/calculus1_ch1',
//          quizCallback: '/calculus1_quiz1',
//          worksheetCallback: '/calculus1_ws1'
//       },
//       '/calculus1_ch2_menu': {
//          title: 'Derivatives',
//          description: 'In this chapter, you\'ll explore derivatives and their applications. You\'ll understand how to compute the rate of change of a function and apply it to various real-world problems.',
//          noteCallback: '/calculus1_ch2',
//          quizCallback: '/calculus1_quiz2',
//          worksheetCallback: '/calculus1_ws2'
//       },
//       '/calculus1_ch3_menu': {
//          title: 'Applications of Derivatives',
//          description: 'This chapter focuses on the various applications of derivatives, such as optimization, curve sketching, and finding the maximum and minimum values of functions.',
//          noteCallback: '/calculus1_ch3',
//          quizCallback: '/calculus1_quiz3',
//          worksheetCallback: '/calculus1_ws3'
//       },
//       '/calculus1_ch4_menu': {
//          title: 'Integrals',
//          description: 'In this chapter, you’ll dive into integrals, their properties, and their applications. You’ll learn how to compute areas under curves and solve problems involving accumulation.',
//          noteCallback: '/calculus1_ch4',
//          quizCallback: '/calculus1_quiz4',
//          worksheetCallback: '/calculus1_ws4'
//       }
//    };

//    bot.on('callbackQuery', async (callbackQuery) => {
//       const chatId = callbackQuery.message.chat.id;
//       const callbackData = callbackQuery.data;

//       if (chapterData[callbackData]) {
//          const chapter = chapterData[callbackData];
//          bot.sendMessage(chatId, 
//             `📘 **Chapter ${callbackData.slice(-1)}: ${chapter.title}**\n\n` +
//             `${chapter.description}\n\n` +
//             "Please choose one of the following options:", {
//             parseMode: 'Markdown',
//             replyMarkup: bot.inlineKeyboard([
//                [bot.inlineButton(`📄 Download Chapter ${callbackData.slice(-1)} Note`, { callback: chapter.noteCallback })],
//                [bot.inlineButton(`📝 Take Quiz ${callbackData.slice(-1)}`, { callback: chapter.quizCallback })],
//                [bot.inlineButton(`📂 Download Worksheet ${callbackData.slice(-1)}`, { callback: chapter.worksheetCallback })]
//             ])
//          });
//       }

//       bot.answerCallbackQuery(callbackQuery.id);
//    });

//    // Function to Send Calculus1 Course Menu
//    function sendCalculus1Menu(chatId) {
//       bot.sendMessage(chatId, "Calculus I (Math2021) Chapters and Quizzes:", {
//          replyMarkup: bot.inlineKeyboard([
//             [bot.inlineButton('Course Outline', { callback: '/calculus1_outline' })],
//             [bot.inlineButton('Pre-Course Assessment Exam', { callback: '/calculus1_pre_assessment' })],
            
//             [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus1_ch1_menu' })],
//             [bot.inlineButton('Chapter 2: Derivatives', { callback: '/calculus1_ch2_menu' })],
//             [bot.inlineButton('Chapter 3: Applications of Derivatives', { callback: '/calculus1_ch3_menu' })],
//             [bot.inlineButton('Chapter 4: Integrals', { callback: '/calculus1_ch4_menu' })]
//          ])
//       });
//    }
// };



const canUseBot = require('../utils/canUseBot');
const textbookLink = "https://drive.google.com/file/d/13GZADLr9sd4FXLKc3vRZus9XXjf-d4SG/view?usp=sharing";
 

module.exports = (bot) => {
   // Calculus1 Command
   bot.on('/calculus1', async (msg) => {
      const chatId = msg.chat.id;
      try {
         if (await canUseBot(msg.from.id, chatId)) {
            sendCalculus1Menu(chatId);
         }
      } catch (error) {
         console.error('Error in /calculus1 command:', error);
         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
      }
   });

   // Handle callback queries for calculus1-related buttons
   bot.on('callbackQuery', async (callbackQuery) => {
      const chatId = callbackQuery.message.chat.id;
      const callbackData = callbackQuery.data;

      switch (callbackData) {
         case 'calculus1_start':
            if (await canUseBot(callbackQuery.from.id, chatId)) {
               sendCalculus1Menu(chatId); // Reuse sendCalculus1Menu
            }
            break;
         
            case '/calculus1_outline':
               bot.sendMessage(chatId,
                  "<b><u>Course Outline: Calculus I (Math2021)</u></b>\n\n" +
                  "This course covers the following topics:\n" +
                  "1. <b>Limits and Continuity</b>: : Fundamental concepts of limits and continuity.\n" +
                  "2. <b>Derivatives</b>: Introduction to derivatives and their applications.\n" +
                  "3. <b>Applications of Derivatives</b>: Explore extreme values and concavity.\n" +
                  "4. <b>Integrals</b>: Study integrals and their applications in finding areas and volumes.\n\n" +
                  "You can download the complete course outline here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Calculus%20I%20for%20Mathematics.pdf'>Download Course Outline</a>",
                  { parseMode: 'HTML'}
               );
               break;
            case '/calculus1_pre_assessment':
               bot.sendMessage(chatId, "<b>Pre-Course Assessment Exam</b>\n\n" +
                  "This assessment is designed to evaluate your current knowledge of calculus concepts before starting the course.\n" +
                  "You can take the Pre-Course Assessment Exam here: <a href='https://quizizz.com/join?gc=86017277'>Take Assessment</a>",
                  { parseMode: 'HTML' }
               );
               break;

         case '/calculus1_ch1_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 1: Limits and Continuity</b>\n\n" +
               "This chapter introduces the concept of limits, how functions behave as inputs approach specific values, and how continuity can be defined. You'll learn fundamental ideas that set the groundwork for derivatives and integrals.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 1 Note and Reference', { callback: '/calculus1_ch1' })],
                  [bot.inlineButton('📝 Quiz 1', { callback: '/calculus1_quiz1' })],
                  [bot.inlineButton('📂 Worksheet 1', { callback: '/calculus1_ws1' })]
               ])
            });
            break;

         case '/calculus1_ch1':
            bot.sendMessage(chatId,
               "<b>Chapter 1: Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Calculus%20I%20lecture%20note.pdf'>Download Chapter 1 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>\n" + 
               "Reference: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Reference</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_quiz1':
            bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/calculus1/chapter1");
            break;

         case '/calculus1_ws1':
            bot.sendMessage(chatId, "<b>Worksheet 1: Introduction to Limits</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 1.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/WS-1.pdf'>Download Worksheet 1</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_ch2_menu':
            bot.sendMessage(chatId,
               "📘 <b> Chapter 2: Derivatives </b>\n\n" +
               "In this chapter, you'll explore derivatives and their applications. You'll understand how to compute the rate of change of a function and apply it to various real-world problems.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 2 Note and Reference', { callback: '/calculus1_ch2' })],
                  [bot.inlineButton('📝 Quiz 2', { callback: '/calculus1_quiz2' })],
                  [bot.inlineButton('📂 Worksheet 2', { callback: '/calculus1_ws2' })]
               ])
            });
            break;

         case '/calculus1_ch2':
            bot.sendMessage(chatId,
               "<b>Chapter 2: Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Calculus%20I%20lecture%20note.pdf'>Download Chapter 2 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>\n" + 
               "Reference: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Reference</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_quiz2':
            bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/calculus1/chapter2");
            break;

         case '/calculus1_ws2':
            bot.sendMessage(chatId, "<b>Worksheet 2: Derivatives</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 2.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/WS-2.pdf'>Download Worksheet 2</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_ch3_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 3: Applications of Derivatives</b>\n\n" +
               "This chapter focuses on the various applications of derivatives, such as optimization, curve sketching, and finding the maximum and minimum values of functions.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 3 Note and Reference', { callback: '/calculus1_ch3' })],
                  [bot.inlineButton('📝 Quiz 3', { callback: '/calculus1_quiz3' })],
                  [bot.inlineButton('📂 Worksheet 3', { callback: '/calculus1_ws3' })]
               ])
            });
            break;

         case '/calculus1_ch3':
            bot.sendMessage(chatId,
               "<b> Chapter 3: Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Calculus%20I%20lecture%20note.pdf'>Download Chapter 3 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>\n" + 
               "Reference: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Reference</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_quiz3':
            bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/calculus1/chapter3");
            break;

         case '/calculus1_ws3':
            bot.sendMessage(chatId, "<b>Worksheet 3: Applications of Derivatives</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 3.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/WS-3.pdf'>Download Worksheet 3</a>",
               { parseMode: 'HTML' }
            );
            break;



         case '/calculus1_ch4_menu':
            bot.sendMessage(chatId,
               "📘 <b> Chapter 4: Integrals </b>\n\n" +
               "In this chapter, you'll dive into integrals, their properties, and their applications. You'll learn how to compute areas under curves and solve problems involving accumulation.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 4 Note and Reference', { callback: '/calculus1_ch4' })],
                  [bot.inlineButton('📝 Quiz 4', { callback: '/calculus1_quiz4' })],
                  [bot.inlineButton('📂 Worksheet 4', { callback: '/calculus1_ws4' })]
               ])
            });
            break;

         case '/calculus1_ch4':
            bot.sendMessage(chatId,
               "<b>Chapter 4: Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Calculus%20I%20lecture%20note.pdf'>Download Chapter 4 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Calculus I Textbook</a>\n" + 
               "Reference: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/Applied%20one%20module.pdf'>Download Reference</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_quiz4':
            bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/calculus1/chapter4");
            break;

         case '/calculus1_ws4':
            bot.sendMessage(chatId, "<b>Worksheet 4: Integrals</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 4.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/main/content/WS-4.pdf'>Download Worksheet 4</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_as1':
            bot.sendMessage(chatId,
               "Assignment 1: Covers Chapters 1 and 2.\n\n" +
               "This assignment contains additional exercises and practice problems.\n\n" +
               "You can download the PDF here: <a href='https://example.com/assignment1.pdf'>Download Assignment 1</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_as2':
            bot.sendMessage(chatId,
               "Assignment 2: Covers Chapters 3 and 4.\n\n" +
               "This assignment contains additional exercises and practice problems.\n\n" +
               "You can download the PDF here: <a href='https://example.com/assignment2.pdf'>Download Assignment 2</a>",
               { parseMode: 'HTML' }
            );
            break;

         case '/calculus1_midExam':
            bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1 and 2: https://quizizz.com/calculus1/midterm");
            break;

         case '/calculus1_finalExam':
            bot.sendMessage(chatId, "Take the Final Exam for the entire course: https://quizizz.com/calculus1/finalexam");
            break;
      }

      bot.answerCallbackQuery(callbackQuery.id);
   });

   // Function to Send Calculus1 Course Menu
   function sendCalculus1Menu(chatId) {
      bot.sendMessage(chatId, "<b>               Calculus I (Math2021)</b>", {
         parseMode: 'HTML', 
         replyMarkup: bot.inlineKeyboard([
            [bot.inlineButton('Course Outline', { callback: '/calculus1_outline' })],
            [bot.inlineButton('Pre-Course Assessment Exam', { callback: '/calculus1_pre_assessment' })],
            [bot.inlineButton('Chapter 1: Limits and Continuity', { callback: '/calculus1_ch1_menu' })],
            [bot.inlineButton('Chapter 2: Derivatives', { callback: '/calculus1_ch2_menu' })],
            [bot.inlineButton('Chapter 3: Applications of Derivatives', { callback: '/calculus1_ch3_menu' })],
            [bot.inlineButton('Chapter 4: Integrals', { callback: '/calculus1_ch4_menu' })],
            [bot.inlineButton('Assignment 1: Chapters 1 and 2', { callback: '/calculus1_as1' })],
            [bot.inlineButton('Assignment 2: Chapters 3 and 4', { callback: '/calculus1_as2' })],
            [bot.inlineButton('Mid Exam: Chapters 1 and 2', { callback: '/calculus1_midExam' })],
            [bot.inlineButton('Final Exam: Entire Course', { callback: '/calculus1_finalExam' })]
         ])
      });
   }
};
