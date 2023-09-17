import {telegramBot} from "./init.js";

export class ActionTelegram {

    static getFileLink = async (fileId) => {
        let request = null;

        try {
            request = await telegramBot.getFileLink(fileId);
            console.log(request);
        } catch (e) {
            console.error(e.message)
        }

        return request;
    }

    static sendDocumentBuffer = async (chatId, file) => {
        let request = null;

        try {
            request = await telegramBot.sendDocument(
                chatId,
                file.buffer,
                {},
                {
                    contentType: file.mimetype,
                    filename: file.originalname,
                }
            );
            console.log(request)
        } catch (e) {
            console.error(e.message)
        }

        return request;
    }

    static sendMessageComment = async (chatId, text = '') => {
        try {
            await telegramBot.sendMessage(chatId, text, {});
        } catch (e) {
            console.error(e.message)
        }
    }
}