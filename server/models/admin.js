import dotenv from 'dotenv';
import pool from '../config/Db';
import Helper from '../helpers/hashPassword';

dotenv.config();

const admin = {
  email: 'nico@gmail.com',
  first_name: 'nicolas',
  last_name: 'kasolene',
  password: Helper.hashPassword('nico123'),
  is_admin: true,
};

const createAdmin = () => pool.query('INSERT INTO users(email, first_name, last_name, password, is_admin) VALUES($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING');
pool.query(createAdmin,
  [
    admin.email,
    admin.first_name,
    admin.last_name,
    admin.password,
    admin.is_admin,
  ]);
