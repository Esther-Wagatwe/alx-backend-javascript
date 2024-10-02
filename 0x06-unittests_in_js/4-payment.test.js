const chai = require('chai');
const { expect } = chai;

const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi with stubbed Utils.calculateNumber', function () {
  beforeEach(function() {
    sinon.stub(Utils, 'calculateNumber').returns(10);
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    Utils.calculateNumber.restore();
    console.log.restore(); 
  });

  it('should call Utils.calculateNumber with the correct parameters', function () {
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(console.log.calledWithExactly('The total is: 10')).to.be.true;
  });
});