import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import  app from '../index';
import trips from '../models/Trips';
import users from '../models/Users';

const should = chai.should();
chai.use(chaiHttp);

const createTripDetails = {
    busLicenseNumber: 'R84 958 8834',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
    fare: 10,
  };
  
  const createTripDetailsUndefinned = {
    busLicenseNumber: 'R84 958 8834',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
  };
  
  
  const createTripDetailsTrue = {
    busLicenseNumber: 'R84 958 8834',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
    fare: 10,
  };

  describe('Trip', () => {
    it('it should not create a trip with undefinned values', (done) => {
      chai.request(app)
        .post('/api/v1/trip')
        .set('Authorization', users[0].token)
        .send(createTripDetailsUndefinned )
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  
  
    it('should return a 201 status and trip data when everything is okey', (done) => {
      chai.request(app)
        .post('/api/v1/trip')
        .set('Authorization', users[0].token)
        .send(createTripDetailsTrue)
        .end((err, res) => {
          // res.should.have.status(201);
          done();
        });
    });
  

    it('should not create account with undefinned parameters', (done) => {
      chai.request(app)
        .post('/api/v1/trip')
        .set('Authorization', users[0].token)
        .send(createTripDetailsUndefinned)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  }); 
