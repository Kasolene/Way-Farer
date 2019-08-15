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
}

export default validateInput;
