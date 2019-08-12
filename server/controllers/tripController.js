import pool from '../config/configDb';
import { tripQuery} from '../models/Queries';

export function createAtrip(req, res) {
  const {
    busLicenseNumber, seatingCapacity, origin, destination, tripDate, fare, status
  } = req.body;

  pool.query(tripQuery([ busLicenseNumber, seatingCapacity, origin, destination, tripDate, fare, status])).then(result => {
    
    if(result.rowCount > 0){
      res.status(201).json({
        status: 201,
        data:result.rows[0]
      });
    } else {
      res.status(500).send({
        status: 500,
        data : {
          message: 'an error occured',
        }
      });
    }
    
  }).catch(err => {
      res.status(500).send({
        status: 500,
        data : {
          message: 'an error occured',
        }
      });
    });
}

export function getAllTrips(req, res) {
  res.status(200).json({
    status: 200,
    data: trips,
  });
}

export function getOneTrip(req, res) {
  const {tripId } = req.params;
  const trip = trips.find(trip => trip.tripId.toString() === tripId );
  if (trip) {
    res.status(200).send({
      status : 200,
      data : trip,
    });
  } if (!trip) {
    res.status(404).send({
     status :404,
     data : {
        message: 'No trip found with this ID',
     }
  });
  }
}

export function cancelTrip(req, res) {

  const { tripId } = req.params;
  const mytrip = trips.find(trip => trip.tripId.toString() === tripId);
  if(mytrip){
    trips[mytrip.tripId-1].status = 'canceled';
    res.status(200).json({
      status: 200,
      data: {
        message : 'Trip cancelled successfully'
      }
    });
  } else {
   res.status(500).json({
      status: 500,
      message: 'trip not cancelled',
    });
  }

}