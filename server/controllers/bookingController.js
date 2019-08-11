import bookings from '../models/Bookings';
import trips from '../models/Trips';
import users from '../models/Users';

export function bookAtrip(req, res) {
    const {
         tripId,
      } = req.body;
      const userEmail = req.decoded.id;
      if(tripId){
      const trip = trips.find(trip=>trip.tripId.toString() === tripId);
      const user  = users.find(user=>user.email === userEmail);
      if(trip){
        if(trip.status !== 'canceled'){
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
        res.status(201).json({
            status :201,
            data : bookings[bookings.length - 1]
        });
      } else {
        res.status(403).send({
          status: 403,
          data :{
            message : 'trip is already canceled',
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
    }
     else {
      res.status(400).send({
        status: 400,
        data : {
          message : 'specify the trip id',
        }
      });
    }
}

export function getAllBookings(req, res, next) {
  const {id} = req.decoded;
  console.log(id);
  const user  = users.find(user=>user.email === id);
  if(user && user.isAdmin){
    res.status(200).json({
      status: 200,
      data: bookings,
    });
  } else if(user){
    const myBookings = [];
    bookings.forEach(element => {
        if(element.userEmail === id) myBookings.push(element);
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