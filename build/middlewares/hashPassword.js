"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = hashPassword;
exports.comparePassword = comparePassword;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saltRounds = 10;

function hashPassword(password) {
  if (password) {
    return _bcryptjs["default"].hashSync(password, saltRounds, function (err, hash) {
      return hash;
    });
  }

  return undefined;
}

function comparePassword(password, hash) {
  return _bcryptjs["default"].compareSync(password, hash, function (err, res) {
    return res;
  });
}
//# sourceMappingURL=hashPassword.js.map