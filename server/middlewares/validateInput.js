import Joi from 'joi';

/**
   * This function validates in credentials at the time of signing up.
   * @param {*} req -Request to be executed or performed
   * @param {*} res -Response to be returned
   * @param {*} next -Skip process if satifies.
   */

export function validateSignUp(req, res, next) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required()
      .error(() => 'The valid email is required'),
    firstName: Joi.string().min(3).required()
      .error(() => 'The first name is required and and must be of minimum 3 characters '),
    lastName: Joi.string().min(3).required()
      .error(() => 'The last name is required and and must be of minimum 3 characters'),
    password: Joi.string().min(6).required()
      .error(() => 'The password is required and and must be of minimum 6 characters'),
    isAdmin: Joi.bool().valid(true, false).required()
      .error(() => 'Please specify if Admin or Not'),
  });

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.message,
    });
  }
  if (!req.value) { req.value = {}; }
  req.value.body = result.value;
  next();
}

export default validateSignUp;
