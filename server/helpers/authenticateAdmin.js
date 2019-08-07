import jwt from '../../node_modules/jsonwebtoken';
import {
  validateToken, TokenUnauthorized, notValidToken, tokenError,
} from '../middlewares/middlewareHelper';
import users from '../models/Users';

export default function checkAdmin(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = validateToken(token);
  if (token) {
    jwt.verify(token, 'nicolas', (err, decoded) => {
      if (err) {
        return notValidToken(res);
      }
      req.decoded = decoded;
      if (users.find(user => user.token === token && user.isAdmin)) next();
      return TokenUnauthorized(res);
    });
  } else {
    return tokenError(res);
  }
}
