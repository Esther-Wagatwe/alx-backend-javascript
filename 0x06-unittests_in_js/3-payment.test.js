const chai = require('chai');
const { expect } = chai;

const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function() {
    sinon.spy(Utils, 'calculateNumber');
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    Utils.calculateNumber.restore();
  });

  it('should call Utils.calculateNumber with the correct parameters', function () {
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(console.log.calledWithExactly('The total is: 120')).to.equal(true);
  });
});