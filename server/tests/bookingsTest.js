import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import  app from '../index';
import trips from '../models/Trips';
import users from '../models/Users';
import bookings from '../models/Bookings';

const should = chai.should();
chai.use(chaiHttp);

const bookTripDetails = {
    tripId : '1',
    userEmail : 'nicolas@gmail.com',
  };
  
  const bookTripDetailsUndefinned = {
    userEmail : 'nicolas@gmail.com',
  };
    
  const bookTripDetailsTrue = {
    tripId : '1',
    userEmail : 'nicolas@gmail.com',
  };

  describe('Booking', () => {
    it('it should not book a trip with undefinned values', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .send(bookTripDetailsUndefinned)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  
  
    it('should return a 201 status and trip data when everything is okey', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .send(bookTripDetailsTrue)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  

    it('should not create book a trip with undefinned parameters', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .send(bookTripDetailsUndefinned)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  }); 