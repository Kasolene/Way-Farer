import express from 'express';
import { signUpController,signInController } from '../controllers/userController';
import { validateSignUp,validateSignIn } from '../middlewares/validateInput';

const router = express.Router();

// user signup route
router.post('/signup', validateSignUp, signUpController);

// user signIn route
router.post('/signin', validateSignIn, signInController);

export default router;

