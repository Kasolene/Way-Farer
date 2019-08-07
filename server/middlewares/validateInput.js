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

export function validateSignIn(req, res, next) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required().error(() => 'The valid email is required'),
    password: Joi.string().min(6).required().error(() => 'The password is required and and must be of minimum 6 characters'),
  });

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.message,
    });
  }
  next();
}

export function validateTrip(req, res, next) {
  const schema = Joi.object().keys({
    busLicenseNumber: Joi.string().trim().strict().regex(/^[A-Za-z]{3}-[0-9]{3}-[A-Za-z]{2}$/)
      .required()
      .error(() => 'The bus lincese number is required and with this format XXX-XXX-XX '),
    seatingCapacity: Joi.number().required()
      .error(() => 'The seating capacity is equired and can not be less than 1'),
    origin: Joi.string().trim()
      .required()
      .error(() => 'The origin is required and should not be less than 3 characters'),
    destination: Joi.string().trim()
      .required()
      .error(() => 'The destination is required and should not be less than 3 characters '),
    tripDate: Joi.date().required()
      .error(() => 'The trip date is required "'),
    fare: Joi.number().required()
      .error(() => 'The fare is equired and can not be less than 1'),
  });

  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return res.status(400).json({
      status: 400,
      message: (result.error.message),
    });
  }
  if (!req.value) { req.value = {}; }
  req.value.body = result.value;
  next();
}
