import express from 'express';
import { createAtrip, getAllTrips, getOneTrip, cancelTrip} from '../controllers/tripController';
import { validateTrip } from '../middlewares/validateInput';
import isAdmin from '../helpers/authenticateAdmin';

const router = express.Router();

// create a new trip
router.post('/trip', isAdmin, validateTrip, createAtrip);

// Retrieve all Trips
router.get('/trip', getAllTrips);

// Retrieve a single Trip by tripId
router.get('/trip/:tripId', getOneTrip);

// Cancel a Trip by tripId
 router.post('/trip/:tripId', cancelTrip);
export default router;
