import users from '../models/Users';
import createToken from '../middleware/createToken';
import {hashPassword, comparePassword} from '../helpers/hashPassword';

export function signUpController(req, res) {
  const {
    email, first_name, last_name,password, is_admin,
  } = req.body;

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

export function signInController(req, res) {
  const { email, password } = req.body;
  // users[index].is_admin = true;
  const myuser = users.find(user => user.email === email && comparePassword(password,user.password));
  if (myuser) {
    
    const index = users.findIndex(user => user.email === email);
    const token = createToken(email);
    users[index].token = token;
    myuser.token = token;
    delete myuser.password;
    res.status(200).send(myuser);
  } else {
    res.status(401).json({
      status: 401,
      message: 'Incorrect Email Or Password',
    });
  }
}
