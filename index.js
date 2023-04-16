const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to Sahil\'s Telegram Bot!'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.hears('how are you?', (ctx) => ctx.reply('I am fine, what about you?'));
bot.launch();