import users from '../models/Users';
import createToken from '../helpers/createToken';
import { hashPassword } from '../middlewares/hashPassword';

export function signUpController(req, res) {
  const {
    email, firstName, lastName, password, isAdmin,
  } = req.body;

  if (users.find(user => user.email === email)) {
    res.status(409).send({
      status: 409,
      message: 'This email is already in use',
    });
  } else {
    users.push({
      token: createToken(email),
      userId: users.length,
      email,
      firstName,
      lastName,
      password: hashPassword(password),
      isAdmin,
    });
    res.status(201).json(users[users.length - 1]);
  }
}

export default signUpController;
