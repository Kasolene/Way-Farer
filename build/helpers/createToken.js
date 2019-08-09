"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createToken(email) {
  var token = _jsonwebtoken["default"].sign({
    id: email
  }, 'nicolas', {
    expiresIn: '24h'
  });

  return token;
}
//# sourceMappingURL=createToken.js.map