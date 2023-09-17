import {app} from "../index.js";
import {saveFileValidation} from "../validations/saveFileValidation.js";
import {FileController} from "../controllers/FileController.js";

export const saveFileRouter = () => {
    app.post('/api/save-file/', saveFileValidation, async (req, res) => {
        return FileController.saveFile(req, res);
    });
}