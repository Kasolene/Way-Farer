import trips from '../models/Trips';

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
