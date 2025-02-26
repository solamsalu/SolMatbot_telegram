const canUseBot = require('../utils/canUseBot');
const sendMainMenu = require('../utils/sendMainMenu');

const textbookLink = "https://drive.google.com/file/d/1iPATmsD5SvZF86c_GCFlwktdCjbKn2HJ/view?usp=drive_link";
const referenceLink = "https://drive.google.com/file/d/12oc4vEjLLpg-AgbpnHV_SvSEVpZ3W_Hc/view?usp=drive_link"

module.exports = (bot) => {
   // AppliedMathIII Command
   bot.on('/appliedmath3', async (msg) => {
      const chatId = msg.chat.id;
      try {
         if (await canUseBot(msg.from.id, chatId)) {
            sendAppliedMath3Menu(chatId);
         }
      } catch (error) {
         console.error('Error in /appliedmath3 command:', error);
         bot.sendMessage(chatId, 'An error occurred. Please try again later.');
      }
   });
 
   // Handle callback queries for appliedmath3-related buttons
   bot.on('callbackQuery', async (callbackQuery) => {
      const chatId = callbackQuery.message.chat.id;
      const callbackData = callbackQuery.data;

      switch (callbackData) {
         case '/start':
            sendMainMenu(bot, chatId); // Call the main menu function
            break;

         case 'appliedmath3_start':
            if (await canUseBot(callbackQuery.from.id, chatId)) {
               sendAppliedMath3Menu(chatId); // Reuse sendAppliedMath3Menu
            }
            break;

         case '/appliedmath3_outline':
            bot.sendMessage(chatId,
               "<b><u>Course Outline: Applied Math III</u></b>\n\n" +
               "This course covers the following topics:\n" +
               "1. <b>Ordinary Differential Equation of the First Order</b>: Basic concepts, separable equations, homogeneous equations, exact differential equations, integrating factors, linear first order differential equations, applications.\n" +
               "2. <b>Ordinary Differential Equation of the Second Order</b>: Homogeneous linear equations, equations with constant coefficients, general solutions, real and complex roots, methods for solving non-homogeneous equations, applications.\n" +
               "3. <b>Laplace Transform</b>: Laplace transforms of standard functions, inverse Laplace transform, transform of derivatives and integrals, differentiation and integration of transforms, convolution, solving differential equations.\n" +
               "4. <b>Fourier Series and Fourier Integral</b>: Periodic functions, trigonometric series, Fourier series and integrals, complex Fourier series and integrals, Fourier cosine and sine transformations, Fourier transformation.\n" +
               "5. <b>Vector Calculus</b>: Scalar and vector fields, curves, arc length, tangents, gradients, divergence, curl, line integrals, Green's theorem, surface integrals, divergence theorem, Stokes' theorem, applications.\n" +
               "6. <b>Complex Analytic Functions</b>: Complex numbers, functions of complex variables, limits, derivatives, analytic functions, Cauchy-Riemann equations, Laplace equations, elementary equations (exponential, trigonometric, hyperbolic, logarithmic functions).\n" +
               "7. <b>Complex Integral</b>: Line integrals in the complex plane, Cauchy integral theorem, Cauchy integral formula, derivatives of analytic functions.\n\n" +
               "You can download the complete course outline here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/34c524df08a0cb421ecf854c2e6c4ca16614fac2/content/Applied%20Mathematics%20III%20Course%20Syllabus%20for%20Engineering%20Students%202025.pdf'>Download Course Outline</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_pre_assessment':
            bot.sendMessage(chatId, "<b>Pre-Course Assessment Exam</b>\n\n" +
               "This assessment is designed to evaluate your current knowledge of applied mathematics concepts before starting the course.\n" +
               "You can take the Pre-Course Assessment Exam here: <a href='https://quizizz.com/join?gc=appliedmath3'>Take Assessment</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ch1_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 1: Ordinary Differential Equation of the First Order</b>\n\n" +
               "This chapter introduces the concepts of first-order differential equations, including separable equations, homogeneous equations, exact differential equations, integrating factors, linear first-order differential equations, and their applications.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 1 Note and Reference', { callback: '/appliedmath3_ch1' })],
                  [bot.inlineButton('📝 Quiz 1', { callback: '/appliedmath3_quiz1' })],
                  [bot.inlineButton('📂 Worksheet 1', { callback: '/appliedmath3_ws1' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch1':
            bot.sendMessage(chatId,
               "<b>Chapter 1: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/refs/heads/main/content/Applied%20III%20Unit%20One.pdf'>Download Chapter 1 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href='" + referenceLink + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch1_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz1':
            bot.sendMessage(chatId, "Take the quiz for Chapter 1: https://quizizz.com/appliedmath3/chapter1",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch1_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws1':
            bot.sendMessage(chatId, "<b>Worksheet 1: Introduction to Differential Equations</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 1.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/621a13ecb0e4e586e0e24dd9ba82e7cc8ddfc471/content/Applied%20III%20WS%20-1.pdf'>Download Worksheet 1</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch1_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;




         case '/appliedmath3_ch2_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 2: Ordinary Differential Equation of the Second Order</b>\n\n" +
               "This chapter covers homogeneous linear equations of the second order, equations with constant coefficients, general solutions, real and complex roots, methods for solving non-homogeneous equations, and applications.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 2 Note and Reference', { callback: '/appliedmath3_ch2' })],
                  [bot.inlineButton('📝 Quiz 2', { callback: '/appliedmath3_quiz2' })],
                  [bot.inlineButton('📂 Worksheet 2', { callback: '/appliedmath3_ws2' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch2':
            bot.sendMessage(chatId,
               "<b>Chapter 2: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/621a13ecb0e4e586e0e24dd9ba82e7cc8ddfc471/content/Applied%20III%20Unit%20Two.pdf'>Download Chapter 2 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href='" + referenceLink + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch2_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz2':
            bot.sendMessage(chatId, "Take the quiz for Chapter 2: https://quizizz.com/appliedmath3/chapter2",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch2_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws2':
            bot.sendMessage(chatId, "<b>Worksheet 2: Ordinary Differential Equation of the Second Order</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 2.\n\n" +
               "You can download the PDF here: <a href='https://raw.githubusercontent.com/solamsalu/SolMatbot_telegram/621a13ecb0e4e586e0e24dd9ba82e7cc8ddfc471/content/Applied%20III%20WS%20-2.pdf'>Download Worksheet 2</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch2_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;




         case '/appliedmath3_ch3_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 3: Laplace Transform</b>\n\n" +
               "This chapter covers Laplace transforms of standard functions, inverse Laplace transform, transform of derivatives and integrals, differentiation and integration of transforms, convolution, and solving differential equations.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 3 Note and Reference', { callback: '/appliedmath3_ch3' })],
                  [bot.inlineButton('📝 Quiz 3', { callback: '/appliedmath3_quiz3' })],
                  [bot.inlineButton('📂 Worksheet 3', { callback: '/appliedmath3_ws3' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch3':
            bot.sendMessage(chatId,
               "<b>Chapter 3: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://your-note-link.com'>Download Chapter 3 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href=' " + reference + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch3_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz3':
            bot.sendMessage(chatId, "Take the quiz for Chapter 3: https://quizizz.com/appliedmath3/chapter3",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch3_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws3':
            bot.sendMessage(chatId, "<b>Worksheet 3: Laplace Transform</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 3.\n\n" +
               "You can download the PDF here: <a href='https://your-worksheet-link.com'>Download Worksheet 3</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch3_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ch4_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 4: Fourier Series and Fourier Integral</b>\n\n" +
               "This chapter covers periodic functions, trigonometric series, Fourier series and integrals, complex Fourier series and integrals, Fourier cosine and sine transformations, and Fourier transformation.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 4 Note and Reference', { callback: '/appliedmath3_ch4' })],
                  [bot.inlineButton('📝 Quiz 4', { callback: '/appliedmath3_quiz4' })],
                  [bot.inlineButton('📂 Worksheet 4', { callback: '/appliedmath3_ws4' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch4':
            bot.sendMessage(chatId,
               "<b>Chapter 4: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://your-note-link.com'>Download Chapter 4 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href=' " + reference + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch4_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz4':
            bot.sendMessage(chatId, "Take the quiz for Chapter 4: https://quizizz.com/appliedmath3/chapter4",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch4_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws4':
            bot.sendMessage(chatId, "<b>Worksheet 4: Fourier Series and Fourier Integral</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 4.\n\n" +
               "You can download the PDF here: <a href='https://your-worksheet-link.com'>Download Worksheet 4</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch4_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;


         case '/appliedmath3_ch5_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 5: Vector Calculus</b>\n\n" +
               "This chapter covers scalar and vector fields, curves, arc length, tangents, gradients, divergence, curl, line integrals, Green's theorem, surface integrals, divergence theorem, Stokes' theorem, and applications.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 5 Note and Reference', { callback: '/appliedmath3_ch5' })],
                  [bot.inlineButton('📝 Quiz 5', { callback: '/appliedmath3_quiz5' })],
                  [bot.inlineButton('📂 Worksheet 5', { callback: '/appliedmath3_ws5' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch5':
            bot.sendMessage(chatId,
               "<b>Chapter 5: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://your-note-link.com'>Download Chapter 5 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href=' " + reference + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch5_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz5':
            bot.sendMessage(chatId, "Take the quiz for Chapter 5: https://quizizz.com/appliedmath3/chapter5",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch5_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws5':
            bot.sendMessage(chatId, "<b>Worksheet 5: Vector Calculus</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 5.\n\n" +
               "You can download the PDF here: <a href='https://your-worksheet-link.com'>Download Worksheet 5</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch5_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ch6_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 6: Complex Analytic Functions</b>\n\n" +
               "This chapter covers complex numbers, functions of complex variables, limits, derivatives, analytic functions, Cauchy-Riemann equations, Laplace equations, and elementary equations (exponential, trigonometric, hyperbolic, logarithmic functions).\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 6 Note and Reference', { callback: '/appliedmath3_ch6' })],
                  [bot.inlineButton('📝 Quiz 6', { callback: '/appliedmath3_quiz6' })],
                  [bot.inlineButton('📂 Worksheet 6', { callback: '/appliedmath3_ws6' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch6':
            bot.sendMessage(chatId,
               "<b>Chapter 6: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://your-note-link.com'>Download Chapter 6 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href=' " + reference + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch6_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz6':
            bot.sendMessage(chatId, "Take the quiz for Chapter 6: https://quizizz.com/appliedmath3/chapter6",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch6_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws6':
            bot.sendMessage(chatId, "<b>Worksheet 6: Complex Analytic Functions</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 6.\n\n" +
               "You can download the PDF here: <a href='https://your-worksheet-link.com'>Download Worksheet 6</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch6_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ch7_menu':
            bot.sendMessage(chatId,
               "📘 <b>Chapter 7: Complex Integral</b>\n\n" +
               "This chapter covers line integrals in the complex plane, Cauchy integral theorem, Cauchy integral formula, and derivatives of analytic functions.\n\n" +
               "Please choose one of the following options:", {
               parseMode: 'HTML',
               replyMarkup: bot.inlineKeyboard([
                  [bot.inlineButton('📄 Chapter 7 Note and Reference', { callback: '/appliedmath3_ch7' })],
                  [bot.inlineButton('📝 Quiz 7', { callback: '/appliedmath3_quiz7' })],
                  [bot.inlineButton('📂 Worksheet 7', { callback: '/appliedmath3_ws7' })],
                  [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                  [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
               ])
            });
            break;

         case '/appliedmath3_ch7':
            bot.sendMessage(chatId,
               "<b>Chapter 7: 📚 Textbook and Reference</b>\n\n" +
               "Note: <a href='https://your-note-link.com'>Download Chapter 7 Note</a>\n" +
               "Textbook: <a href='" + textbookLink + "'>Download Applied Math III Textbook</a>\n" +
               "Reference: <a href=' " + reference + "'>Download Reference</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch7_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_quiz7':
            bot.sendMessage(chatId, "Take the quiz for Chapter 7: https://quizizz.com/appliedmath3/chapter7",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch7_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_ws7':
            bot.sendMessage(chatId, "<b>Worksheet 7: Complex Integral</b>\n\n" +
               "This worksheet contains practice problems related to the concepts learned in Chapter 7.\n\n" +
               "You can download the PDF here: <a href='https://your-worksheet-link.com'>Download Worksheet 7</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: '/appliedmath3_ch7_menu' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;


         case '/appliedmath3_as1':
            bot.sendMessage(chatId,
               "Assignment 1: Covers Chapters 1, 2, and 3.\n\n" +
               "This assignment contains additional exercises and practice problems from Chapters 1, 2, and 3.\n\n" +
               "You can download the PDF here: <a href='https://your-assignment-link.com/assignment1'>Download Assignment 1</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_as2':
            bot.sendMessage(chatId,
               "Assignment 2: Covers Chapters 4, 5, 6, and 7.\n\n" +
               "This assignment contains additional exercises and practice problems from Chapters 4, 5, 6, and 7.\n\n" +
               "You can download the PDF here: <a href='https://your-assignment-link.com/assignment2'>Download Assignment 2</a>",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_midExam':
            bot.sendMessage(chatId, "Take the Mid Exam for Chapters 1, 2, and 3: https://quizizz.com/appliedmath3/midterm",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

         case '/appliedmath3_finalExam':
            bot.sendMessage(chatId, "Take the Final Exam for Chapters 4, 5, 6, and 7: https://quizizz.com/appliedmath3/finalexam",
               {
                  parseMode: 'HTML',
                  replyMarkup: bot.inlineKeyboard([
                     [bot.inlineButton('🔙 Back', { callback: 'appliedmath3_start' })],
                     [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
                  ])
               }
            );
            break;

      }

      bot.answerCallbackQuery(callbackQuery.id);
   });

   // Function to Send AppliedMathIII Course Menu
   function sendAppliedMath3Menu(chatId) {
      bot.sendMessage(chatId, "<b>         Applied Math III (Math 2072)</b>", {
         parseMode: 'HTML',
         replyMarkup: bot.inlineKeyboard([
            [bot.inlineButton('📋 Course Outline', { callback: '/appliedmath3_outline' })],
            [bot.inlineButton('📝 Pre-Course Assessment Exam', { callback: '/appliedmath3_pre_assessment' })],
            [bot.inlineButton('📖 Chapter 1: Ordinary Differential Equation of the First Order', { callback: '/appliedmath3_ch1_menu' })],
            [bot.inlineButton('📖 Chapter 2: Ordinary Differential Equation of the Second Order', { callback: '/appliedmath3_ch2_menu' })],
            [bot.inlineButton('📖 Chapter 3: Laplace Transform', { callback: '/appliedmath3_ch3_menu' })],
            [bot.inlineButton('📖 Chapter 4: Fourier Series and Fourier Integral', { callback: '/appliedmath3_ch4_menu' })],
            [bot.inlineButton('📖 Chapter 5: Vector Calculus', { callback: '/appliedmath3_ch5_menu' })],
            [bot.inlineButton('📖 Chapter 6: Complex Analytic Functions', { callback: '/appliedmath3_ch6_menu' })],
            [bot.inlineButton('📖 Chapter 7: Complex Integral', { callback: '/appliedmath3_ch7_menu' })],
            [bot.inlineButton('📚 Assignment 1: Chapters 1, 2, and 3', { callback: '/appliedmath3_as1' })],
            [bot.inlineButton('📚 Assignment 2: Chapters 4, 5, 6, and 7', { callback: '/appliedmath3_as2' })],
            [bot.inlineButton('📝 Mid Exam: Chapters 1, 2, and 3', { callback: '/appliedmath3_midExam' })],
            [bot.inlineButton('📝 Final Exam: Chapters 4, 5, 6, and 7', { callback: '/appliedmath3_finalExam' })],
            [bot.inlineButton('🏠 Main Page', { callback: '/start' })]
         ])
      });
   }
};
