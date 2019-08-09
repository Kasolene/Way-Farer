"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAtrip = createAtrip;
exports.getAllTrips = getAllTrips;
exports.getOneTrip = getOneTrip;
exports.cancelTrip = cancelTrip;

var _Trips = _interopRequireDefault(require("../models/Trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Adds two numbers together.
 * @param req The first number.
 * @param res num2 The second number.
 * @returns {int} The sum of the two numbers.
 */
function createAtrip(req, res) {
  var _req$body = req.body,
      busLicenseNumber = _req$body.busLicenseNumber,
      seatingCapacity = _req$body.seatingCapacity,
      origin = _req$body.origin,
      destination = _req$body.destination,
      fare = _req$body.fare,
      status = _req$body.status;

  _Trips["default"].push({
    tripId: _Trips["default"].length,
    busLicenseNumber: busLicenseNumber,
    seatingCapacity: seatingCapacity,
    origin: origin,
    destination: destination,
    tripDate: Date(),
    fare: fare,
    status: 'active'
  });

  res.status(200).json({
    status: 200,
    data: _Trips["default"][_Trips["default"].length - 1]
  });
}

function getAllTrips(req, res) {
  res.status(200).json({
    status: 200,
    data: _Trips["default"]
  });
}

function getOneTrip(req, res) {
  var tripId = req.params.tripId;

  var trip = _Trips["default"].find(function (trip) {
    return trip.tripId.toString() === tripId;
  });

  if (trip) {
    res.status(200).send({
      status: 200,
      data: trip
    });
  }

  if (!trip) {
    res.status(404).send({
      status: 404,
      data: {
        message: 'No trip found with this ID'
      }
    });
  }
}

function cancelTrip(req, res) {
  var tripId = req.params.tripId;

  var mytrip = _Trips["default"].find(function (trip) {
    return trip.tripId.toString() === tripId;
  });

  if (mytrip) {
    _Trips["default"][mytrip.tripId - 1].status = 'canceled';
    res.status(200).json({
      status: 200,
      data: {
        message: 'Trip cancelled successfully'
      }
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'trip not cancelled'
    });
  }
}
//# sourceMappingURL=tripController.js.map