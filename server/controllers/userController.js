import createToken from '../helpers/createToken';
import { hashPassword, comparePassword } from '../middlewares/hashPassword';
import pool from '../config/configDb';
import { signupQuery, signinQuery } from '../models/Queries';

export function signUpController(req, res) {
  const {
    email, firstName, lastName, password, isAdmin,
  } = req.body;

  pool.query(signupQuery([createToken(email), email, firstName, lastName, hashPassword(password), isAdmin||false])).then(result => {
    
    console.log(result);
    if(result.rowCount > 0){
     delete result.rows[0].password;
     delete result.rows[0].isadmin;
      res.status(201).json({
        status: 201,
        data:result.rows[0]
      });
    } else {
      res.status(500).send({
        status: 500,
        data : {
          message: 'an error occured',
        }
      });
    }
    
  }).catch(err => {
      console.log(err);
      if(err.routine === '_bt_check_unique' || err.constraint === 'users_email_key'){
      res.status(409).send({
        status: 409,
        data : {
          message: 'This email is already in use',
        }
      });
    } else {
      res.status(500).send({
        status: 500,
        data : {
          message: 'an error occured',
        }
      });
    }
  })
}

export function signInController(req, res) {
  const { email, password } = req.body;

  pool.query(signinQuery([email])).then(result =>{

    if(result.rowCount > 0){
      
      const user = result.rows[0];

      if(comparePassword(password, user.password)){
        delete result.rows[0].password;
        delete result.rows[0].isadmin;
        res.status(200).send({
          status: 200,
          data: {
              user,
          },
        });
      } else {
        res.status(401).json({
          status : 401,
          data : {
          message: 'Incorrect Email Or Password',
          }
        });
      }
    }
  })
}