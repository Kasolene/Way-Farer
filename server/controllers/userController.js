import users from '../models/Users';

export function signUpController(req, res) {
  const {
    email, password, firstName, lastName, isAdmin,
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
      id: users.length,
      email,
      firstName,
      lastName,
      password,
      isAdmin,
    });
    res.status(201).json(users[users.length - 1]);
  }
}

export function signInController(req, res) {
  const { email, password } = req.body;
  // const index = users.findIndex(user => user.email === email);
  // users[index].is_admin = true;
  const myuser = users.find(user => user.email === email && user.password === password);
  if (myuser) {
    res.status(200).send(myuser);
  } else {
    res.status(401).json({
      status: 401,
      message: 'Incorrect Email Or Password',
    });
  }
}
