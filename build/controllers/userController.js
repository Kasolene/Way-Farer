"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpController = signUpController;
exports.signInController = signInController;

var _Users = _interopRequireDefault(require("../models/Users"));

var _createToken = _interopRequireDefault(require("../helpers/createToken"));

var _hashPassword = require("../middlewares/hashPassword");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function signUpController(req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      firstName = _req$body.firstName,
      lastName = _req$body.lastName,
      password = _req$body.password,
      isAdmin = _req$body.isAdmin;

  if (_Users["default"].find(function (user) {
    return user.email === email;
  })) {
    res.status(409).send({
      status: 409,
      data: {
        message: 'This email is already in use'
      }
    });
  } else {
    _Users["default"].push({
      token: (0, _createToken["default"])(email),
      userId: _Users["default"].length,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: (0, _hashPassword.hashPassword)(password),
      isAdmin: false
    });

    res.status(200).json({
      status: 200,
      data: _Users["default"][_Users["default"].length - 1]
    });
  }
}

function signInController(req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;

  var myuser = _Users["default"].find(function (user) {
    return user.email === email && (0, _hashPassword.comparePassword)(password, user.password);
  });

  if (myuser) {
    var index = _Users["default"].findIndex(function (user) {
      return user.email === email;
    });

    var token = (0, _createToken["default"])(email);
    _Users["default"][index].token = token;
    myuser.token = token;
    res.status(200).send({
      status: 200,
      data: {
        token: myuser.token,
        userId: myuser.userId,
        email: myuser.email,
        firstName: myuser.firstName,
        lastName: myuser.lastName
      }
    });
  } else {
    res.status(401).json({
      status: 401,
      data: {
        message: 'Incorrect Email Or Password'
      }
    });
  }
}
//# sourceMappingURL=userController.js.map