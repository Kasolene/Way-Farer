import express from 'express';
import { bookAtrip, getAllBookings, deleteBooking } from '../controllers/bookingController';
import checkUser from '../helpers/checkUser';

const router = express.Router();

// create booking route
router.post('/bookings', checkUser, bookAtrip);

// retrieve booking route
router.get('/bookings',checkUser, getAllBookings);

// retrieve booking route
router.delete('/bookings/:bookingId', checkUser, deleteBooking);

export default router;
