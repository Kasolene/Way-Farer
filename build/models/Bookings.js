"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Trips = _interopRequireDefault(require("../models/Trips"));

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bookings = [{
  bookingId: 1,
  userId: _Users["default"][1].userId,
  tripId: _Trips["default"][0].tripId,
  busLicenseNumber: _Trips["default"][0].busLicenseNumber,
  tripDate: _Trips["default"][0].tripDate,
  userFistName: _Users["default"][1].firstName,
  userLastName: _Users["default"][1].lastName,
  userEmail: _Users["default"][1].email,
  createdOn: Date.now()
}, {
  bookingId: 2,
  userId: _Users["default"][2].userId,
  tripId: _Trips["default"][0].tripId,
  busLicenseNumber: _Trips["default"][0].busLicenseNumber,
  tripDate: _Trips["default"][0].tripDate,
  userFistName: _Users["default"][2].firstName,
  userLastName: _Users["default"][2].lastName,
  userEmail: _Users["default"][2].email,
  createdOn: Date.now()
}];
var _default = bookings;
exports["default"] = _default;
//# sourceMappingURL=Bookings.js.map