const request = require('supertest');
const app = require('../../../api/app');

describe('POST /login', () => {
  it('responds with json', (done) => {
    request(app)
      .post('/login')
      .send({email: 'fulana@deliveryapp.com', password: 'fulana@123' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
