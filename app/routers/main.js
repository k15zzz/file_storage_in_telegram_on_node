import {app} from "../index.js";
import {saveFileRouter} from "./saveFileRouter.js";
import {getFileRouter} from "./getFileRouter.js";

export const routers = () => {
    saveFileRouter();
    getFileRouter();

    app.get('/', (req, res) => {
        res.send('Server start');
    });
}