import {app} from "../index.js";
import {FileController} from "../controllers/FileController.js";
import {getFileValidation} from "../validations/getFileValidation.js";

export const getFileRouter = () => {
    app.get('/api/get-file/', getFileValidation, async (req, res) => {
        return FileController.getSaveFile(req, res);
    });
}