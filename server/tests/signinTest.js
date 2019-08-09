import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import   app from '../index';
import users from '../models/Users';

const should = chai.should();
chai.use(chaiHttp);

const signinDetails = {
  email: 'nicolas@gmail.com',
  password: 'nico',
};
const signinDetailsTrue = {
  email: 'nicolas@gmail.com',
  password: 'nicolas123',
};
const signinDetailsEmpty = {
  email: 'nicolas@gmail.com',
  password: '',
};

describe('login', () => {
  it('it should not login with undefinned values', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send('')
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });

  it('should return a 400 status when empty mail or password provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(signinDetailsEmpty)
      .end((err, res) => {
        res.should.have.status(400);
//        chai.expect(res.body.message).equal('You provided a wrong email or password');
        done();
      });
  });

  it('should return a 401 status when wrong mail or password provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(signinDetails)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  it('should return a 200 status and user data when everything is okey', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(signinDetailsTrue)
      .end((err, res) => {
        res.should.have.status(200);
        chai.expect(res.body.data.email).equal('nicolas@gmail.com');
        done();
      });
  });
});
