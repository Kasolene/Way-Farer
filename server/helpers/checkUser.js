import jwt from 'jsonwebtoken';
import {
  validateToken, TokenUnauthorized, notValidToken, tokenError,
} from '../middlewares/middlewareHelper';
import users from '../models/Users';
import bookings from '../models/Bookings';

export default function checkUser(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = validateToken(token);
  if (token) {
    jwt.verify(token, 'nicolas', (err, decoded) => {
      if (err) {
        return notValidToken(res);
      }
      req.decoded = decoded;
      const {bookingId} = req.params;
      if(bookingId){
      const booking = bookings.find(booking => booking.bookingId.toString() === bookingId && booking.userEmail === decoded.id);
      
      if (users.find(user => user.token === token && (user.isAdmin || booking ))) next();
      else TokenUnauthorized(res);
      } else next();
    });
  } else {
    return tokenError(res);
  }
}