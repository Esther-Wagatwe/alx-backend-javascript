const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe("Test calculateNumber function", function() {
  it("Should return 2 when a is 1.1 and b is 1.1", function() {
    assert.strictEqual(calculateNumber(1.1, 1.1), 2);
  });
  it('should return 5 when a is 2.4 and b is 2.6', function() {
    assert.strictEqual(calculateNumber(2.4, 2.6), 5);
  });
});