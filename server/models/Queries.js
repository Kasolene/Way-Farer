const signupQuery = `INSERT INTO 
users(email, first_name, last_name, password, is_admin) 
      VALUES($1, $2, $3, $4, $5) 
      returning user_id, email, first_name, last_name`;

const signinQuery = 'SELECT * FROM users WHERE email = $1';

const createTripQuery = `INSERT INTO 
trips(bus_license_number, seating_capacity, origin, destination, trip_date, fare, status) 
      VALUES($1, $2, $3, $4, $5, $6, $7) 
      returning *`;

export {
  signupQuery,
  signinQuery,
  createTripQuery,
};
