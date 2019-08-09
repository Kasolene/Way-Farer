"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bookingController = require("../controllers/bookingController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // create booking route


router.post('/bookings', _bookingController.bookAtrip); // retrieve booking route

router.get('/bookings', _bookingController.getAllBookings); // retrieve booking route

router["delete"]('/bookings/:bookingId', _bookingController.deleteBooking);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=bookingRoute.js.map