"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _Trips = _interopRequireDefault(require("../models/Trips"));

var _Users = _interopRequireDefault(require("../models/Users"));

var _Bookings = _interopRequireDefault(require("../models/Bookings"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var should = _chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var bookTripDetails = {
  tripId: '1',
  userEmail: 'nicolas@gmail.com'
};
var bookTripDetailsUndefinned = {
  userEmail: 'nicolas@gmail.com'
};
var bookTripDetailsTrue = {
  tripId: '1',
  userEmail: 'nicolas@gmail.com'
};
describe('booking', function () {
  it('it should not book a trip with undefinned values', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/bookings').send(bookTripDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('should return a 200 status and trip data when everything is okey', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/bookings').send(bookTripDetailsTrue).end(function (err, res) {
      res.should.have.status(201); //chai.expect(res.body.data.email).equal('nicolaskasolene@gmail.com');

      done();
    });
  });
  it('should not create book a trip with undefinned parameters', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/bookings').send(bookTripDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
});
//# sourceMappingURL=bookingsTest.js.map