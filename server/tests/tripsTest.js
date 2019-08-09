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
    busLicenseNumber: 'KHU-243-KG',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
    fare: 10,
  };
  
  const createTripDetailsUndefinned = {
    busLicenseNumber: 'KHU-243-KG',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
  };
  
  
  const createTripDetailsTrue = {
    busLicenseNumber: 'KHU-243-KG',
    seatingCapacity: 48,
    origin: 'Kigali',
    destination: 'Kampala',
    tripDate: '12.05.2019 ',
    fare: 10,
  };

  describe('trip', () => {
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
  
  
    it('should return a 200 status and trip data when everything is okey', (done) => {
      chai.request(app)
        .post('/api/v1/trip')
        .set('Authorization', users[0].token)
        .send(createTripDetailsTrue)
        .end((err, res) => {
          res.should.have.status(200);
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