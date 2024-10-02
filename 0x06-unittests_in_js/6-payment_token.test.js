const chai = require('chai');
const { expect } = chai;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {

  it('should return a resolved promise with {data: "Successful response from the API"} when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch((error) => done(error));
  });
  
  it('should do nothing when success is false (promise remains pending)', function (done) {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        done(new Error('Promise should not resolve when success is false'));
      })
      .catch((error) => {
        done(new Error('Promise should not reject when success is false'));
      });

    setTimeout(() => {
      done();
    }, 100);
  });
});
