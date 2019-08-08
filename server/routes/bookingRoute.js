import express from 'express';
import { bookAtrip, getAllBookings } from '../controllers/bookingController';

const router = express.Router();

// create booking route
router.post('/bookings', bookAtrip);

// retrieve booking route
router.get('/bookings', getAllBookings);

export default router;
