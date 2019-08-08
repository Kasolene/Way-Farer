import bookings from '../models/Bookings';
import trips from '../models/Trips';
import users from '../models/Users';

export function bookAtrip(req, res) {
    const {
         tripId,userEmail
      } = req.body;

      const trip = trips.find(trip=>trip.tripId.toString() === tripId);
      const user  = users.find(user=>user.email === userEmail);
      if(trip){
        if(user){
        bookings.push({
          bookingId: bookings.length+1,
          userId : user.userId,
          tripId,
          busLicenseNumber : trip.busLicenseNumber,
          tripDate : trip.tripDate,
          userFistName : user.firstName,
          userLastName : user.lastName,
          userEmail,
          createdOn :Date.now(),
        });
        res.status(201).json(bookings[bookings.length - 1]);
      } else {
        res.status(404).send({
          message : 'specified user not found',
          status: 404,
        });
      }
      } else {
        res.status(404).send({
          message : 'specified trip not found',
          status: 404,
        });
      }
}

export function getAllBookings(req, res, next) {
  const {userEmail} = req.query;
  const user  = users.find(user=>user.email === userEmail);
  if(user && user.isAdmin){
    res.status(200).json({
      status: 200,
      data: bookings,
    });
  } else if(user){
    const myBookings = [];
    bookings.forEach(element => {
        if(element.userEmail === userEmail) myBookings.push(element);
    });
    res.status(200).json({
      status: 200,
      data: myBookings,
    });
  } else {
    res.status(404),send({
      message: 'user not found',
    })
  }
}