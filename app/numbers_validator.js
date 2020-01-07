/**
 * A simple class containing methods for validationg numbers
 *
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
   *Creates an instance of NumbersValidator.
   * @memberof NumbersValidator
   */
  constructor() {
  };
  /**
   *
   *
   * @param {Number} number number to check
   * @return {Boolean} true if element is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return n % 2 === 0;
    }
  };
};

module.exports = NumbersValidator;
