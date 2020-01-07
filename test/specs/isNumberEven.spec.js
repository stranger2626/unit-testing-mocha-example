const {expect} = require('chai');
const NumbersValidator = require('../../app/numbers_validator');

describe(`isNumberEven positive scenarios`, function() {
  let validator;
  beforeEach(function() {
    validator = new NumbersValidator();
  });
  it(`should return true if number is even`, function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
  it(`should return false if number is odd`, function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
});