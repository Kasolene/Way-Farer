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

var signupDetails = {
  email: 'nicolas@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password: 'nicolas123'
};
var signupDetailsUndefinned = {
  email: 'nicolas@gmail.com',
  firstName: 'nicolas',
  password: 'nicolas123'
};
var signupDetailsInvalidMail = {
  email: 'nicolas-gmail.com',
  password: 'nicolas123'
};
var signupDetailsInvalidPassword = {
  email: 'nicolas@gmail.com',
  password: 'nico'
};
var signupDetailsTrue = {
  email: 'nicolaskasolene@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password: 'nicolas123'
};
describe('signup', function () {
  it('it should not create an account with undefinned values', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('it should not create an account if the email is already taken', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetails).end(function (err, res) {
      res.should.have.status(409);
      done();
    });
  });
  it('should return a 200 status and user data when everything is okey', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetailsTrue).end(function (err, res) {
      res.should.have.status(200);

      _chai["default"].expect(res.body.data.email).equal('nicolaskasolene@gmail.com');

      done();
    });
  });
  it('should not create account with invalid mail', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetailsInvalidMail).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('should not create account with a password having less than 6 characters', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetailsInvalidPassword).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
  it('should not create account with undefinned parameters', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(signupDetailsUndefinned).end(function (err, res) {
      res.should.have.status(400);
      done();
    });
  });
});
//# sourceMappingURL=signupTest.js.map