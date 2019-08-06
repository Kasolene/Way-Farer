import jwt from '../../node_modules/jsonwebtoken';
import {
  validateToken, TokenUnauthorized, tokenError,
} from '../helpers/middlewareHelper';
import users from '../models/Users';

export default function checkAdmin(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = validateToken(token);
  if (token) {
    jwt.verify(token, 'nikson', (err, decoded) => {
      if (err) {
        return tokenError(res);
      }
      req.decoded = decoded;
      console.log(decoded);
      if(users.find(user=>user.token === token && user.is_admin)) next();
      else tokenError(res);
    });
  } else {
    return tokenError(res);
  }
}
