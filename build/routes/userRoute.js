"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

var _validateInput = require("../middlewares/validateInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // user signup route


router.post('/signup', _validateInput.validateSignUp, _userController.signUpController); // user signIn route

router.post('/signin', _validateInput.validateSignIn, _userController.signInController);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRoute.js.map