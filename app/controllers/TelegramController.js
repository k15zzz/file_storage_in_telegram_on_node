import {ActionTelegram} from "../telegrams/ActionTelegram.js";
import axios from "axios";

export class TelegramController {

    static showFileId = async (msg) => {
        if (!msg.document)  return;

        const chatId = msg.from.id;
        const fileId = msg.document.file_id;
        await ActionTelegram.sendMessageComment(chatId, fileId);
    }

    static getFile = async (msg) => {
        const fileLink = await ActionTelegram.getFileLink(msg.text);
        const chatId = msg.from.id;

        if (!fileLink)  return;

        const response = await axios({
            url: fileLink,
            method: 'GET',
            responseType: 'stream'
        });

        const file =  {
            buffer: response.data,
            mimetype: response.headers['content-type'],
            originalname: fileLink.split('/').pop()
        };

        await ActionTelegram.sendDocumentBuffer(chatId, file);
    }
}