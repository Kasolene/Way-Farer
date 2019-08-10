import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import  app from '../index';
import users from '../models/Users';

const should = chai.should();
chai.use(chaiHttp);

const signupDetails = {
  email: 'nicolas@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password:'nicolas123',
};

const signupDetailsUndefinned = {
  email: 'nicolas@gmail.com',
  firstName: 'nicolas',
  password:'nicolas123',
};

const signupDetailsInvalidMail = {
  email: 'nicolas-gmail.com',
  password:'nicolas123',
};

const signupDetailsInvalidPassword = {
  email: 'nicolas@gmail.com',
  password:'nico',
};

const signupDetailsTrue = {
  email: 'nicolaskasolene@gmail.com',
  firstName: 'nicolas',
  lastName: 'kasolene',
  password:'nicolas123',
};

describe('Signup', () => {
  it('it should not create an account with undefinned values', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsUndefinned)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('it should not create an account if the email is already taken', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetails)
      .end((err, res) => {
        res.should.have.status(409);
        done();
      });
  });

  it('should return a 201 status and user data when everything is okey', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsTrue)
      .end((err, res) => {
        res.should.have.status(201);
        chai.expect(res.body.data.email).equal('nicolaskasolene@gmail.com');
        done();
      });
  });


  it('should not create account with invalid mail', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsInvalidMail)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should not create account with a password having less than 6 characters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsInvalidPassword)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should not create account with undefinned parameters', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsUndefinned)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
}); 
