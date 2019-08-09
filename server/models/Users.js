import { hashPassword } from '../middlewares/hashPassword';
 ft-signin-ap-167693020

const users = [
  {
    token: 0,

import createToken from '../helpers/createToken';

const users = [
  {
    token: createToken('nico@gmail.com'),
develop
    userId: 1,
    email: 'nico@gmail.com',
    firstName: 'nicolas',
    lastName: 'kasolene',
    password: hashPassword('nico123'),
    isAdmin: true,
  },

  {
ft-signin-ap-167693020


 develop
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
ft-signin-ap-167693020
    isAdmin: true,

    isAdmin: false,
develop
  },
];

export default users;
