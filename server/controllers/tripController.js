import trips from '../models/Trips';

export function createAtrip(req, res) {
  const {
    bus_license_number, seating_capacity,origin,destination,fare,status,
  } = req.body;
    trips.push({
      trip_id: trips.length,
      bus_license_number,
      seating_capacity,
      origin,
      destination,
      trip_date: Date(),
      fare,
      status,
    });
    console.log(trips)
    res.status(201).json(trips[trips.length - 1]);
}

export function getAllTrips(req, res) {
    res.status(200).json(trips);
}


export function getOneTrip(req, res) {
    const {trip_id } = req.params;
    const trip = trips.find(trip => trip.trip_id.toString() === trip_id );
    if (trip) {
      res.status(200).send(trip);
    } if (!trip) {
      res.status(404).send({
        message: 'No trip found with this id',
    });
    }else {

    }

  
}

export function cancelTrip(req, res) {
 
}

export function filterTripByOriginOrDest(req, res) {
 
}


