const signupQuery = `INSERT INTO 
users(email, first_name, last_name, password, is_admin) 
      VALUES($1, $2, $3, $4, $5, $6, $7) 
      returning user_id, email, first_name, last_name, is_admin`;

const signinQuery = 'SELECT * FROM users WHERE email = $1';

export {
  signupQuery,
  signinQuery,
};
