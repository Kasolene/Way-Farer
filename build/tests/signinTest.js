"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _Users = _interopRequireDefault(require("../models/Users"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var should = _chai["default"].should();

_chai["default"].use(_chaiHttp["default"]);

var signinDetails = {
  email: 'nicolas@gmail.com',
  password: 'nico'
};
var signinDetailsTrue = {
  email: 'nicolas@gmail.com',
  password: 'nicolas123'
};
var signinDetailsEmpty = {
  email: 'nicolas@gmail.com',
  password: ''
};
describe('login', function () {
  it('it should not login with undefinned values', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send('').end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('should return a 400 status when empty mail or password provided', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(signinDetailsEmpty).end(function (err, res) {
      res.should.have.status(400); //        chai.expect(res.body.message).equal('You provided a wrong email or password');

      done();
    });
  });
  it('should return a 401 status when wrong mail or password provided', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(signinDetails).end(function (err, res) {
      res.should.have.status(401);
      done();
    });
  });
  it('should return a 200 status and user data when everything is okey', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(signinDetailsTrue).end(function (err, res) {
      res.should.have.status(200);

      _chai["default"].expect(res.body.data.email).equal('nicolas@gmail.com');

      done();
    });
  });
});
//# sourceMappingURL=signinTest.js.map