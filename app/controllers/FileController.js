import dotenv from 'dotenv';
dotenv.config();

import {ActionTelegram} from "../telegrams/ActionTelegram.js";
import axios from "axios";
import {validationResult} from "express-validator";

const storageId = process.env.CHAT_ID_STORAGE;

export class FileController {

    static saveFile = async (req, res) => {
        if (!req.file) {
            return res.status(400).send('No document in request');
        }

        const file = req.file;

        let fileId = null;

        if (file) {
            const request = await ActionTelegram.sendDocumentBuffer(storageId, file);

            if (!request)
                return fileId;

            if (request.document && request.document.thumbnail)
                fileId = request.document.thumbnail.file_id;
            if (request.document && request.document.file_id)
                fileId = request.document.file_id;
        }

        res.send(fileId);
    }

    static getSaveFile  = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const { file_id } = req.query;

        const linkFile = await ActionTelegram.getFileLink(file_id);

        try {
            const response = await axios({
                method: 'GET',
                url: linkFile,
                responseType: 'stream'
            });

            res.setHeader('Content-Disposition', 'attachment; filename=' + linkFile.split('/').pop());

            response.data.pipe(res);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Error fetching file');
        }
    }
}