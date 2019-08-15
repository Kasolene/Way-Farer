import db from '../config/Db';
import validateInput from '../helpers/validateInput';
import Helper from '../helpers/hashPassword';
import Authentication from '../middlewares/authentication';
import { signupQuery } from '../models/Queries';

class User {
  /**
       * signup a user into the app
       * @param {*} req
       * @param {*} res
       * @returns {object} reflection object 
       */
  static async singUp(req, res) {
    const { error } = validateInput.signupValidation(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        error: error.details[0].message,
      });
    }
    const hashpassword = Helper.hashPassword(req.body.password);
    // console.log('password');
    const values = [
      req.body.email,
      req.body.first_name,
      req.body.last_name,
      hashpassword,
      false,
    ];
    // console.log(values);
    try {
      const { rows } = await db.query(signupQuery, values);
      const user = rows[0];
      const { user_id, email, is_admin } = rows[0];

      const token = Authentication.generateToken(user_id, email, is_admin);

      return res.status(201).json({
        status: 'success',
        data: {
          token,
          ...user,
        },
      });
    } catch (errors) {
      if (errors.routine === '_bt_check_unique') {
        return res.status(409).json({
          status: 'error',
          error: 'User already exist',
        });
      }
      return res.status(400).json({
        status: 'error',
        error: 'Something went wrong, try again',
      });
    }
  }
}
export default User;
