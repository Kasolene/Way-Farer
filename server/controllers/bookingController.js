import bookings from '../models/Bookings';
import trips from '../models/Trips';
import users from '../models/Users';

export function bookAtrip(req, res) {
    const {
         tripId,userEmail
      } = req.body;
      if(tripId && userEmail){
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
          status: 404,
          data :{
            message : 'specified user not found',
          }
        });
      }
      } else {
        res.status(404).send({
          status: 404,
          data : {
            message : 'specified trip not found',
          }
        });
      }
    } else {
      res.status(400).send({
        status: 400,
        data : {
          message : 'specify the trip id and user email please',
        }
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
      status :404,
      data : {
        message: 'user not found',
      }
    })
  }
}

export function deleteBooking(req, res, next) {
  const { bookingId } = req.params;
  const booking  =  bookings.find(book => book.bookingId.toString() === bookingId);
  if(booking ){
    bookings.splice(booking.bookingId - 1,1);
    res.status(200).send({
      status: 200,
      date : {
        message : 'booking deleted successfully'
      }
    });
  }  else {
   res.status(404).send({
    status: 200,
    date : {
      message : 'booking not found'
    }
   });
  }
 }