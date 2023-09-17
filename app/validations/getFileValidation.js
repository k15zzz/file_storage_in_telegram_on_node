import {check} from 'express-validator';

export const getFileValidation = [
    check('file_id').notEmpty().withMessage('File ID is required').isString().withMessage('File ID must be a string')
];