import users from '../models/Users';
import createToken from '../middleware/createToken';
import { tokenError } from '../helpers/middlewareHelper';
import {hashPassword, comparePassword} from '../helpers/hashPassword';

export function signUpController(req, res) {
  const {
    email, first_name, last_name,password, is_admin,
  } = req.body;
  // const index = users.findIndex(user => user.email === email);
  // users[index].is_admin = true;
  if (users.find(user => user.email === email)) {
    res.status(409).send({
      status: 409,
      message: 'This email is already in use',
    });
  } else {
    users.push({
      user_id: users.length,
      email,
      first_name,
      last_name,
      password:hashPassword(password),
      is_admin,
      token:createToken(email),
    });
    res.status(201).json(users[users.length - 1]);
  }
}


