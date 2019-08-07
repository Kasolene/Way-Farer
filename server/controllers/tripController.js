import trips from '../models/Trips';

/**
 * Adds two numbers together.
 * @param req The first number.
 * @param res num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
export function createAtrip(req, res) {
  const {
    busLicenseNumber, seatingCapacity, origin, destination, fare, status,
  } = req.body;
  trips.push({
    tripId: trips.length, 
    busLicenseNumber,
    seatingCapacity,
    origin,
    destination,
    tripDate: Date(),
    fare,
    status,
  });
  res.status(201).json(trips[trips.length - 1]);
}

export function getAllTrips(req, res) {
  res.status(200).json({
    status: 200,
    data: trips,
  });
}
