import db from '../config/Db';
import validateInput from '../helpers/validateInput';
import { createTripQuery } from '../models/Queries';

class Trip {
  /**
   * Admin can create a trip
   * @param {*} req
   * @param {*} res
   * @returns {object}  object
   */
  static async createAtrip(req, res) {
    // check for admin user
    if (!req.user.is_admin) {
      return res.status(403).json({
        status: 'error',
        error: 'You are Unauthorized! ',
      });
    }

    const { error } = validateInput.createAtrip(req.body);
    if (error) {
      return res.status(400).json({
        status: 'error',
        error: error.details[0].message,
      });
    }
    const values = [
      req.body.bus_license_number,
      req.body.seating_capacity,
      req.body.origin,
      req.body.destination,
      req.body.trip_date,
      req.body.fare,
      'active',
    ];
    try {
      const { rows } = await db.query(createTripQuery, values);
      return res.status(201).json({
        status: 'success',
        data: rows[0],
      });
    } catch (errors) {
      return res.status(400).json({
        status: 400,
        error: 'Something went wrong, try again',
      });
    }
  }
}

export default Trip;
