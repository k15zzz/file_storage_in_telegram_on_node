import express from 'express';
import dotenv from 'dotenv';
import {routers} from "./routers/main.js";
import bodyParser from 'body-parser';

dotenv.config();

const _app = express();

_app.use(bodyParser.json({extended: true}));
_app.use(bodyParser.urlencoded({extended: true}));

export const app = _app;

routers();

_app.listen(process.env.PORT, () => {
    console.log('Сервер запущен на ' + process.env.PORT + ' порту');
});