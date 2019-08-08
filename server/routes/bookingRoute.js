import express from 'express';
import { bookAtrip } from '../controllers/bookingController';

const router = express.Router();

// create booking route
router.post('/bookings', bookAtrip);

export default router;
