const chai = require('chai');
const { expect } = chai;

const sinon = require('sinon')
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with stubbed consoleSpy', function () {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore(); 
  });

  it('should log "The total is: 120"  and call console.log for 100 and 20 once', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20"  and call console.log for 10 and 10 once', function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});