"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookAtrip = bookAtrip;
exports.getAllBookings = getAllBookings;
exports.deleteBooking = deleteBooking;

var _Bookings = _interopRequireDefault(require("../models/Bookings"));

var _Trips = _interopRequireDefault(require("../models/Trips"));

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function bookAtrip(req, res) {
  var _req$body = req.body,
      tripId = _req$body.tripId,
      userEmail = _req$body.userEmail;

  if (tripId && userEmail) {
    var trip = _Trips["default"].find(function (trip) {
      return trip.tripId.toString() === tripId;
    });

    var user = _Users["default"].find(function (user) {
      return user.email === userEmail;
    });

    if (trip) {
      if (user) {
        _Bookings["default"].push({
          bookingId: _Bookings["default"].length + 1,
          userId: user.userId,
          tripId: tripId,
          busLicenseNumber: trip.busLicenseNumber,
          tripDate: trip.tripDate,
          userFistName: user.firstName,
          userLastName: user.lastName,
          userEmail: userEmail,
          createdOn: Date.now()
        });

        res.status(201).json(_Bookings["default"][_Bookings["default"].length - 1]);
      } else {
        res.status(404).send({
          status: 404,
          data: {
            message: 'specified user not found'
          }
        });
      }
    } else {
      res.status(404).send({
        status: 404,
        data: {
          message: 'specified trip not found'
        }
      });
    }
  } else {
    res.status(400).send({
      status: 400,
      data: {
        message: 'specify the trip id and user email please'
      }
    });
  }
}

function getAllBookings(req, res, next) {
  var userEmail = req.query.userEmail;

  var user = _Users["default"].find(function (user) {
    return user.email === userEmail;
  });

  if (user && user.isAdmin) {
    res.status(200).json({
      status: 200,
      data: _Bookings["default"]
    });
  } else if (user) {
    var myBookings = [];

    _Bookings["default"].forEach(function (element) {
      if (element.userEmail === userEmail) myBookings.push(element);
    });

    res.status(200).json({
      status: 200,
      data: myBookings
    });
  } else {
    res.status(404), send({
      status: 404,
      data: {
        message: 'user not found'
      }
    });
  }
}

function deleteBooking(req, res, next) {
  var bookingId = req.params.bookingId;

  var booking = _Bookings["default"].find(function (book) {
    return book.bookingId.toString() === bookingId;
  });

  if (booking) {
    _Bookings["default"].splice(booking.bookingId - 1, 1);

    res.status(200).send({
      status: 200,
      date: {
        message: 'booking deleted successfully'
      }
    });
  } else {
    res.status(404).send({
      status: 200,
      date: {
        message: 'booking not found'
      }
    });
  }
}
//# sourceMappingURL=bookingController.js.map