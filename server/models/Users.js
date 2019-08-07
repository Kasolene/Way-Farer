import { hashPassword } from '../middlewares/hashPassword';

const users = [
  {
    token: 0,
    userId: 1,
    email: 'nico@gmail.com',
    firstName: 'nicolas',
    lastName: 'kasolene',
    password: hashPassword('nico123'),
    isAdmin: true,
  },

  {

    token: 0,
    userId: 2,
    email: 'nicolas@gmail.com',
    firstName: 'nicolas',
    lastName: 'kasolene',
    password: hashPassword('nicolas123'),
    isAdmin: false,
  },
  {
    token: 0,
    userId: 3,
    email: 'nickson@gmail.com',
    firstName: 'nickson',
    lastName: 'kasolene',
    password: hashPassword('nickson123'),
    isAdmin: false,
  },
  {

    token: 0,
    userId: 4,
    email: 'nickas@gmail.com',
    firstName: 'nick',
    lastName: 'kasolene',
    password: hashPassword('nico123'),
    isAdmin: true,
  },
];

export default users;
