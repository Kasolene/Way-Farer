import express from 'express';
import { createAtrip } from '../controllers/tripController';
import { validateTrip } from '../middlewares/validateInput';
import isAdmin from '../helpers/authenticateAdmin';

const router = express.Router();

// create a new trip
router.post('/trip', isAdmin, validateTrip, createAtrip);


export default router;
