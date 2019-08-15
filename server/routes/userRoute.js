import express from 'express';
import User from '../controllers/userController';

const router = express.Router();

// user signup route
router.post('/signup', User.signUp);

// user signin route
router.post('/signin', User.signIn);

export default router;
