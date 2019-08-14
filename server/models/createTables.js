import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

const createTables = () => {
  const usersTable = `CREATE TABLE IF NOT EXISTS
  users (
    user_id serial primary key ,
    email varchar(50) null unique,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    password varchar(255) not null,
    is_admin boolean not null default false
   )`;
  pool.query(usersTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  const tripsTable = `CREATE TABLE IF NOT EXISTS
  trips (
    trip_id serial primary key,
    bus_license_number varchar(50) not null,
    seating_capacity int not null,
    origin varchar(50) not null,
    destination varchar(50) not null,
    trip_date date not null,
    fare float(4) not null,
    status varchar(50) not null
    )`;
  pool.query(tripsTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
  const bookingsTable = `CREATE TABLE IF NOT EXISTS
  bookings (
    booking_id serial primary key,
    user_id int not null,
    trip_id int not null,
    bus_license_number varchar(30) not null,
    trip_date timestamp not null,
    first_name varchar (50) not null,
    last_name varchar (50) not null,
    email varchar (50) not null,
    created_on timestamp default now()
    )`;
  pool.query(bookingsTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  const alterbookings = `ALTER TABLE bookings
    ADD CONSTRAINT fk_bookings_users FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    ADD CONSTRAINT fk_bookings_trip FOREIGN KEY (trip_id) REFERENCES trips(trip_id) ON DELETE CASCADE`;
  pool.query(alterbookings)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

// export pool and createTables to be accessible  from an where within the application
module.exports = {
  createTables,
  pool,
};
require('make-runnable');
