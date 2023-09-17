// Настройка multer для обработки загружаемых файлов
import multer from "multer";

// const upload = multer({ dest: 'uploads/' });
const upload = multer();

export const saveFileValidation = upload.single('file');