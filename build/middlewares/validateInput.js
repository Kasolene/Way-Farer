"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSignUp = validateSignUp;
exports.validateSignIn = validateSignIn;
exports.validateTrip = validateTrip;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
   * This function validates in credentials at the time of signing up.
   * @param {*} req -Request to be executed or performed
   * @param {*} res -Response to be returned
   * @param {*} next -Skip process if satifies.
   */
function validateSignUp(req, res, next) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().email().required().trim().error(function () {
      return 'The valid email is required';
    }),
    firstName: _joi["default"].string().min(3).required().trim().error(function () {
      return 'The first name is required and and must be of minimum 3 characters ';
    }),
    lastName: _joi["default"].string().min(3).required().trim().error(function () {
      return 'The last name is required and and must be of minimum 3 characters';
    }),
    password: _joi["default"].string().min(6).required().trim().error(function () {
      return 'The password is required and and must be of minimum 6 characters';
    })
  });

  var result = _joi["default"].validate(req.body, schema);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.message
    });
  }

  if (!req.value) {
    req.value = {};
  }

  req.value.body = result.value;
  next();
}

function validateSignIn(req, res, next) {
  var schema = _joi["default"].object().keys({
    email: _joi["default"].string().email().required().error(function () {
      return 'The valid email is required';
    }),
    password: _joi["default"].string().required().trim().error(function () {
      return 'The password is required ';
    })
  });

  var result = _joi["default"].validate(req.body, schema);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      error: result.error.message
    });
  }

  next();
}

function validateTrip(req, res, next) {
  var schema = _joi["default"].object().keys({
    busLicenseNumber: _joi["default"].string().trim().strict().regex(/^[A-Za-z]{3}-[0-9]{3}-[A-Za-z]{2}$/).required().error(function () {
      return 'The bus lincese number is required and with this format XXX-XXX-XX ';
    }),
    seatingCapacity: _joi["default"].number().required().error(function () {
      return 'The seating capacity is equired and can not be less than 1';
    }),
    origin: _joi["default"].string().trim().required().error(function () {
      return 'The origin is required and should not be less than 3 characters';
    }),
    destination: _joi["default"].string().trim().required().error(function () {
      return 'The destination is required and should not be less than 3 characters ';
    }),
    tripDate: _joi["default"].date().required().error(function () {
      return 'The trip date is required "';
    }),
    fare: _joi["default"].number().required().error(function () {
      return 'The fare is equired and can not be less than 1';
    })
  });

  var result = _joi["default"].validate(req.body, schema);

  if (result.error) {
    return res.status(400).json({
      status: 400,
      message: result.error.message
    });
  }

  if (!req.value) {
    req.value = {};
  }

  req.value.body = result.value;
  next();
}
//# sourceMappingURL=validateInput.js.map