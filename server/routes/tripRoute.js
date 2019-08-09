import express from 'express';
ft-filter-trips-api-167768837
import { createAtrip, getAllTrips, getOneTrip, cancelTrip, filterTripByOriginOrDest } from '../controllers/tripController';
import { createAtrip, getAllTrips, getOneTrip, cancelTrip } from '../controllers/tripController';
develop
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
ft-cancel-trip-api-167765923
 router.post('/trip/:tripId', cancelTrip);
ft-filter-trips-api-167768837
 router.post('/trip/:tripId',isAdmin, cancelTrip);

// Filter Trips by Origin or Destination
router.get('/trip/:origin',filterTripByOriginOrDest);

router.post('/trip/:tripId', cancelTrip);
develop

develop
export default router;
