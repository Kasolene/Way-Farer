import Joi from 'joi';

const validationOptions = {
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true, // remove unknown keys from the validated data
};

class validateInput {
  /**
   * funtion to check if user input valid details during registration
   * @param {user} object
   */
  static signupValidation(user) {
    const schema = Joi.object().keys({
      email: Joi.string().trim().strict().email()
        .required()
        .error(() => 'Valid email field is required'),
      first_name: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/)
        .min(3)
        .required()
        .error(() => 'First name field is required with min length of 3 and must be alphabet'),
      last_name: Joi.string().trim().strict().regex(/^[a-zA-Z]+$/)
        .min(3)
        .required()
        .error(() => 'last name field is required with min length of 3 and must be alphabet'),
      password: Joi.string().trim().strict().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
        .required()
        .error(() => 'Password with a mininum of 6 letters, a number and a character'),
    });
    return Joi.validate(user, schema, validationOptions);
  }

  /**  funtion to validate login inputs
     * @param{details} string
     */
  static singinValidation(details) {
    const schema = Joi.object().keys({
      email: Joi.string().trim().strict().email()
        .required()
        .error(() => 'Email is required'),
      password: Joi.string().trim().strict().required()
        .error(() => 'you must provide a correct password'),
    });
    return Joi.validate(details, schema, validationOptions);
  }

  /**
   * funtion to check if trip input are valid
   * @param {trip} object
   */
  static createAtrip(trip) {
    const schema = Joi.object().keys({
      bus_license_number: Joi.string().trim().max(12)
        .required()
        .error(() => 'the bus license number is required '),
      seating_capacity: Joi.number().required()
        .error(() => 'the seating capacity is required'),
      origin: Joi.string().trim()
        .required()
        .error(() => 'the origin is required and should not be less than 3 characters and must be lowercase'),
      destination: Joi.string().trim()
        .required()
        .error(() => 'the destination is required and should not be less than 3 characters and must be lowercase'),
      trip_date: Joi.date().required()
        .error(() => 'the trip date is required in the format "21 January, 2019"'),
      fare: Joi.number().required()
        .error(() => 'the fare is required and can not be less than $1'),
    });
    return Joi.validate(trip, schema, validationOptions);
  }
}


export default validateInput;
