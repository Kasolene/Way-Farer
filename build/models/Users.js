"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _hashPassword = require("../middlewares/hashPassword");

var _createToken = _interopRequireDefault(require("../helpers/createToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var users = [{
  token: (0, _createToken["default"])('nico@gmail.com'),
  userId: 1,
  email: 'nico@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password: (0, _hashPassword.hashPassword)('nico123'),
  isAdmin: true
}, {
  token: 0,
  userId: 2,
  email: 'nicolas@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password: (0, _hashPassword.hashPassword)('nicolas123'),
  isAdmin: false
}, {
  token: 0,
  userId: 3,
  email: 'nickson@gmail.com',
  firstName: 'nickson',
  lastName: 'kasolene',
  password: (0, _hashPassword.hashPassword)('nickson123'),
  isAdmin: false
}, {
  token: 0,
  userId: 4,
  email: 'nickas@gmail.com',
  firstName: 'nick',
  lastName: 'kasolene',
  password: (0, _hashPassword.hashPassword)('nico123'),
  isAdmin: false
}];
var _default = users;
exports["default"] = _default;
//# sourceMappingURL=Users.js.map