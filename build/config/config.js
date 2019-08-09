"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var config = {
  port: process.env.PORT || 7777,
  env: process.env.NODE_ENV
};
var _default = config;
exports["default"] = _default;
//# sourceMappingURL=config.js.map