import express from 'express';
import { signInController, signUpController } from '../controllers/userController';
import { validateSignUp, validateSignIn } from '../helpers/validateInput';

const router = express.Router();

// user signup route
router.post('/signup', validateSignUp, signUpController);

// user signIn route
router.post('/signin', validateSignIn, signInController);

export default router;
