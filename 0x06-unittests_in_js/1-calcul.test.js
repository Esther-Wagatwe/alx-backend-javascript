const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('Should return sum of 2 rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.1, 1.1), 2);
      assert.strictEqual(calculateNumber('SUM', 4.5, 5.3), 10)
    });
  });

  describe('SUBTRACT', function() {
    it('Should return subtraction of 2 rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 1.1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 5.3), 0)
    });
  });

  describe('DIVIDE', function() {
    it('Should return division of 2 rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.1, 1.1), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 10.3), 0.5)
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', () => {
      assert.throws(() => {
        calculateNumber(1, 1, 'INVALID');
      }, /Invalid type/);
    });
  });
  
});