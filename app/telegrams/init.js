import TelegramBot from "node-telegram-bot-api";
import {hangEvents} from "./events.js";
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.KEY_TG;

const _telegramBot = new TelegramBot(token, { polling: true });
console.log('Телеграмм бот запущен!');

export const telegramBot = _telegramBot;

hangEvents();