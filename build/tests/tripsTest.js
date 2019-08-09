"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _Trips = _interopRequireDefault(require("../models/Trips"));

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var should = _chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var createTripDetails = {
  busLicenseNumber: 'KHU-243-KG',
  seatingCapacity: 48,
  origin: 'Kigali',
  destination: 'Kampala',
  tripDate: '12.05.2019 ',
  fare: 10
};
var createTripDetailsUndefinned = {
  busLicenseNumber: 'KHU-243-KG',
  seatingCapacity: 48,
  origin: 'Kigali',
  destination: 'Kampala',
  tripDate: '12.05.2019 '
};
var createTripDetailsTrue = {
  busLicenseNumber: 'KHU-243-KG',
  seatingCapacity: 48,
  origin: 'Kigali',
  destination: 'Kampala',
  tripDate: '12.05.2019 ',
  fare: 10
};
describe('trip', function () {
  it('it should not create a trip with undefinned values', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trip').set('Authorization', _Users["default"][0].token).send(createTripDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('should return a 200 status and trip data when everything is okey', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trip').set('Authorization', _Users["default"][0].token).send(createTripDetailsTrue).end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
  it('should not create account with undefinned parameters', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trip').set('Authorization', _Users["default"][0].token).send(createTripDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
});
/*
  it('should create a trip successful', (done) => {
    chai
      .request(app)
      .post('/api/v1/trip')
      .set('Authorization', users[0].token)
      .send(createTripDetails)
      .end((err, res) => {
        const { body } = res;
        tripId = body.data.tripId;
        expect(res.status).to.equal(201);
        expect(res.status).to.be.a('number');
        expect(body).to.be.an('object');
        expect(body.data).to.be.have.property('status');
        done();
      });
  });*/
//# sourceMappingURL=tripsTest.js.map