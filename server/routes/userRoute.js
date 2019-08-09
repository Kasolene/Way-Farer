import express from 'express';
import { signUpController } from '../controllers/userController';
import { validateSignUp } from '../middlewares/validateInput';

const router = express.Router();

// user signup route
router.post('/signup', validateSignUp, signUpController);

export default router;
