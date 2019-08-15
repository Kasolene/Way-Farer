import express from 'express';
import Trip from '../controllers/tripController';
import Authentication from '../middlewares/authentication';

const router = express.Router();

// admin can create trip
router.post('/trip', Authentication.verifyToken, Trip.createAtrip);

export default router;
