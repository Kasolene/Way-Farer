import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// Define the expect assertion
const { expect } = chai;

// chai middleware
chai.use(chaiHttp);

describe('Index', () => {
  it('should get home successfully', (done) => {
    chai.request(app)
      .get('/')
      .then((res) => {
        expect(res.status).to.be.equal(200);
        done();
      })
      .catch(error => done(error));
  });
  it('should return 404 if route not found', (done) => {
    chai.request(app)
      .get('/api/v1/home')
      .then((res) => {
        expect(res.status).to.be.equal(404);
        expect(res.body).to.have.property('error');
        done();
      })
      .catch(error => done(error));
  });
});
it('should handle internal server error', (done) => {
  chai.request(app)
    .get('/api/v1/')
    .then((res) => {
      expect(res.status).to.be.equal(404);
      expect(res.body).to.have.property('error');
      done();
    })
    .catch(error => done(error));
});
