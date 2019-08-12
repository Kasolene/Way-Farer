import jwt from '../../node_modules/jsonwebtoken';
import pool from '../config/configDb';
import {signinQuery} from '../models/Queries';
import {
  validateToken, TokenUnauthorized, notValidToken, tokenError,
} from '../middlewares/middlewareHelper';

export default function checkAdmin(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = validateToken(token);
  if (token) {
    jwt.verify(token, 'nicolas', (err, decoded) => {
      if (err) {
        console.log(err)
        return notValidToken(res);
      }
      req.decoded = decoded;
      pool.query(signinQuery([decoded.id])).then(result => {
        
        if(result.rowCount>0){
          
          if(result.rows[0].isadmin){ 
            console.log(result.rows)
            return next();
            
          }
          else return TokenUnauthorized(res);
        } else return TokenUnauthorized(res);    
    }).catch(error => {
       return TokenUnauthorized(res);
    });
  });
} else notValidToken(res);
}
