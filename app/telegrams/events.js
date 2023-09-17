import {telegramBot} from "./init.js";
import {TelegramController} from "../controllers/TelegramController.js";

export const hangEvents = () => {
    telegramBot.on('message', async (msg) => {
        await TelegramController.showFileId(msg);
        await TelegramController.getFile(msg);
    });
}