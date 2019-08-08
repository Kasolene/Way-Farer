import express from 'express';
import { bookAtrip, getAllBookings, deleteBooking } from '../controllers/bookingController';

const router = express.Router();

// create booking route
router.post('/bookings', bookAtrip);

// retrieve booking route
router.get('/bookings', getAllBookings);

// retrieve booking route
router.delete('/bookings/:bookingId', deleteBooking);

export default router;
