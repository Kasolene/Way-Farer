import jwt from 'jsonwebtoken';
import {
  validateToken, TokenUnauthorized, notValidToken, tokenError,
} from '../middlewares/middlewareHelper';

import {signinQuery, getSingleBooking} from '../models/Queries';


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
      pool.query(getSingleBooking([bookingId])).then(result => {
        if(result.rowCount > 0 ){
          pool.query(signinQuery([decoded.id])).then(result1 => {
            if(result1.rowCount>0){
              if(result1.rows[0].isadmin || result.rows[0].useremail===decoded.id) next();
              else return TokenUnauthorized(res);
            } else return TokenUnauthorized(res);    
        }).catch(err => {
           return TokenUnauthorized(res);
        });
        } else TokenUnauthorized(res);
      }).catch(err2 => {
        return TokenUnauthorized(res);
      });
      
  } else next();
});
} notValidToken(res);

} 
