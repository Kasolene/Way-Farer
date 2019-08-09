import users from '../models/Users';
import createToken from '../helpers/createToken';
 ft-signup-api-167688267
import { hashPassword } from '../middlewares/hashPassword';

ft-signin-ap-167693020
// import { tokenError } from '../middlewares/middlewareHelper';

develop
import { hashPassword, comparePassword } from '../middlewares/hashPassword';
 develop

export function signUpController(req, res) {
  const {
    email, firstName, lastName, password, isAdmin,
  } = req.body;

  if (users.find(user => user.email === email)) {
    res.status(409).send({
      status: 409,
 ft-signin-ap-167693020
      message: 'This email is already in use',

      data : {
        message: 'This email is already in use',
      }
develop
    });
  } else {
    users.push({
      token: createToken(email),
      userId: users.length,
      email,
      firstName,
      lastName,
      password: hashPassword(password),
 ft-signin-ap-167693020
      isAdmin,
    });
    res.status(201).json(users[users.length - 1]);

      isAdmin :false,
    });
    res.status(200).json({
      status: 200,
      data:users[users.length - 1]
    });
 develop
  }
}

 ft-signup-api-167688267
export default signUpController;

export function signInController(req, res) {
  const { email, password } = req.body;
 ft-signin-ap-167693020


 develop
  const myuser = users.find(user => user.email === email && comparePassword(password, user.password));

  if (myuser) {
    const index = users.findIndex(user => user.email === email);
    const token = createToken(email);
    users[index].token = token;
    myuser.token = token;
ft-signin-ap-167693020
    delete myuser.password;
    res.status(200).send({
      status: 200,
      data: myuser,
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'Incorrect Email Or Password',

    res.status(200).send({
      status: 200,
      data: {
          token: myuser.token,
          userId: myuser.userId,
          email: myuser.email,
          firstName: myuser.firstName,
          lastName: myuser.lastName,
      },
    });
  } else {
    res.status(401).json({
      status : 401,
      data : {
      message: 'Incorrect Email Or Password',
      }
develop
    });
  }
}
 develop
