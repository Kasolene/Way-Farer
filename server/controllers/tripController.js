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
    status :'active',
  });
  res.status(200).json({
    status : 200,
    data : trips[trips.length - 1]
  }
  );
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
  const mytrip = trips.find(trip=>trip.tripId.toString() === tripId);
  if(mytrip){
    trips[mytrip.tripId-1].status = 'canceled';
    res.status(200).json({
      ft-filter-trips-api-167768837
      message:'trip canceled',
      data:trips[mytrip.tripId-1],
    });
  } else {
    res.status(404).json({
      message:'trip could not be found',
      status:404,
    });
  }

}

export function filterTripByOriginOrDest(req, res) {
  console.log('step 1');
  const { origin } = req.params;
  const filter = trips.find(trip => trip.origin === origin);
  console.log('step 2');
  if(filter){
    res.status(200).json({
      status:200,
      data:filter,
    });
  } else {
    res.status(404).json({
      status:404,
      message:'trip not found',
    });
  }
}

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
develop
