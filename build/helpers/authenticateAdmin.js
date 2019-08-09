"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = checkAdmin;

var _jsonwebtoken = _interopRequireDefault(require("../../node_modules/jsonwebtoken"));

var _middlewareHelper = require("../middlewares/middlewareHelper");

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function checkAdmin(req, res, next) {
  var token = req.headers['x-access-token'] || req.headers.authorization;
  token = (0, _middlewareHelper.validateToken)(token);

  if (token) {
    _jsonwebtoken["default"].verify(token, 'nicolas', function (err, decoded) {
      if (err) {
        return (0, _middlewareHelper.notValidToken)(res);
      }

      req.decoded = decoded;
      if (_Users["default"].find(function (user) {
        return user.token === token && user.isAdmin;
      })) next();else return (0, _middlewareHelper.TokenUnauthorized)(res);
    });
  } else {
    return (0, _middlewareHelper.tokenError)(res);
  }
}
//# sourceMappingURL=authenticateAdmin.js.map