import userController from '../controllers/userController.js';
import body from 'express-validator';
import  express from 'express';

var router = express.Router();

let loginValidation = [
    body('loginId', 'loginId is require').notEmpty(),
    body('password', 'password is require').notEmpty(),
]

router.route('/login').post(userController.login)

export default router;