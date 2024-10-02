const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('Should return sum of 2 rounded numbers', function() {
      expect(calculateNumber('SUM', 1.1, 1.1)).to.equal(2);
      expect(calculateNumber('SUM', 4.5, 5.3)).to.equal(10)
    });
  });

  describe('SUBTRACT', function() {
    it('Should return subtraction of 2 rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.1, 1.1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 4.5, 5.3)).to.equal(0)
    });
  });

  describe('DIVIDE', function() {
    it('Should return division of 2 rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.1, 1.1)).to.equal(1);
      expect(calculateNumber('DIVIDE', 4.5, 10.3)).to.equal(0.5)
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', () => {
      expect(() => {
        calculateNumber('INVALID', 1, 1);
      }).to.throw(Error, 'Invalid type');
    });
  });
  
});