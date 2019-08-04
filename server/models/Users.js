import {hashPassword} from '../helpers/hashPassword';
const users = [
  {
    user_id: 1,
    email: 'nico@gmail.com',
    first_name: 'nicolas',
    last_name: 'kasolene',
    password: hashPassword('nico123'),
    is_admin: true,
    token:0,
  },

  {
    user_id: 2,
    email: 'nicolas@gmail.com',
    first_name: 'nicolas',
    last_name: 'kasolene',
    password: hashPassword('nicolas123'),
    is_admin: false,
    token:0,
  },
  {
    user_id: 3,
    email: 'nickson@gmail.com',
    first_name: 'nickson',
    last_name: 'kasolene',
    password: hashPassword('nickson123'),
    is_admin: false,
    token:0,
  },
  {
    user_id: 4,
    email: 'nickas@gmail.com',
    first_name: 'nick',
    last_name: 'kasolene',
    password: hashPassword('nico123'),
    is_admin: true,
    token:0,
  },
];
export default users;
