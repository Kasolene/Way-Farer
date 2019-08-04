import bookings from '../models/Bookings';

export function bookAtrip(req, res) {
    const {
        user_id, trip_id,
      } = req.body;
        trips.push({
          booking_id: bookings.length,
          user_id,
          trip_id,
          created_on :Date.now(),
        });
        res.status(201).json(bookings[bookings.length - 1]);
 
}

export function getAllBookings(req, res, next) {
 
}



export function getOneBooking(req, res, next) {
 
}

export function deleteBooking(req, res, next) {
 
}



