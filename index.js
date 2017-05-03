import 'babel-polyfill';
import './env';
import TelegramBot from 'node-telegram-bot-api';
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
//Keyboards
const StartKeyboard = [
  ['a', 'b'],
  ['Contact Us']
]
//Main Script
bot.onText(/\/start/, (msg) => {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: StartKeyboard,
      resize_keyboard: true,
      one_time_keyboard: true
    })
  };
  bot.sendMessage(msg.chat.id, `Hello`, opts);
});

bot.onText(/Contact Us/, (msg) => {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: StartKeyboard,
      resize_keyboard: true,
      one_time_keyboard: true
    })
  };
  bot.sendMessage(msg.chat.id, `Please Write Your Message:`, opts);
  getmessage1();
});
// Functions
var getmessage = async () => {
  await new Promise((resolve, reject) => {
    bot.once('message', (msg) => {
      console.log("User Message Is: " + msg.text)
      const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
          keyboard: StartKeyboard,
          resize_keyboard: true,
          one_time_keyboard: true
        })
      };
      bot.sendMessage(msg.chat.id, 'Thanks, Your Message Received', opts);
      resolve(true);
    });
  });
  return
}

var getmessage1 = async () => {
  await getmessage();
}
//END
//https://github.com/saeedhei
