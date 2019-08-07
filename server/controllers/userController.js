import users from '../models/Users';
import createToken from '../helpers/createToken';
// import { tokenError } from '../middlewares/middlewareHelper';
import { hashPassword, comparePassword } from '../middlewares/hashPassword';

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

export function signInController(req, res) {
  const { email, password } = req.body;

  const myuser = users.find(user => user.email === email && comparePassword(password, user.password));

  if (myuser) {
    const index = users.findIndex(user => user.email === email);
    const token = createToken(email);
    users[index].token = token;
    myuser.token = token;
    delete myuser.password;
    res.status(200).send({
      status: 200,
      data: myuser,
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'Incorrect Email Or Password',
    });
  }
}
