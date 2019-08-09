import jwt from '../../node_modules/jsonwebtoken';
import {
 ft-signin-ap-167693020
  validateToken, TokenUnauthorized, tokenError,

  validateToken, TokenUnauthorized, notValidToken, tokenError,
develop
} from '../middlewares/middlewareHelper';
import users from '../models/Users';

export default function checkAdmin(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  token = validateToken(token);
  if (token) {
    jwt.verify(token, 'nicolas', (err, decoded) => {
      if (err) {
ft-signin-ap-167693020
        return tokenError(res);
      }
      req.decoded = decoded;
      console.log(decoded);
      if(users.find(user=>user.token === token && user.is_admin)) next();
      else tokenError(res);

        return notValidToken(res);
      }
      req.decoded = decoded;
      if (users.find(user => user.token === token && user.isAdmin)) next();
      else return TokenUnauthorized(res);
 develop
    });
  } else {
    return tokenError(res);
  }
}
