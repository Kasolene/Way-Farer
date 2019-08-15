import express from 'express';
import User from '../controllers/userController';

const router = express.Router();

// user signup route
router.post('/signup', User.singUp);


export default router;
