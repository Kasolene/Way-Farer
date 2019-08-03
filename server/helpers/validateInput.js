const  Joi = require('joi');


class validateInput {
  /**
   * This function validates user credentials at the time of signing up.
   * @param {*} req -Request to be executed or performed
   * @param {*} res -Response to be returned
   * @param {*} next -Skip process if satifies.
   */
  static signUp(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      first_name: Joi.string().min(3).max(25).required(),
      last_ame: Joi.string().min(3).max(25).required(),
      password: Joi.string().min(6).max(30).required(),
      isAdmin: Joi.bool().valid(true, false).required()
    });

    const { error } = Joi.validate(req.body, schema);

    if (!error) { return next(); }

    return Helper.joiError(res, error)
  }

}

module.exports =validateInput;
