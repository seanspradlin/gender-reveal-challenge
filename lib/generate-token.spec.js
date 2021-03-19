const { expect } = require('chai');
const { generateToken } = require('./generate-token');

describe('generate-token', () => {
  describe('generateToken', () => {
    it('should be a function', () => {
      expect(generateToken).to.be.a('function');
    });

    it('should return the correct string value', () => {
      const mother = 'Jane';
      const father = 'John';
      const yearsTogether = 3;
      const expected = 'JANCN';
      const result = generateToken({ mother, father, yearsTogether });
      expect(result).to.equal(expected);
    });
  });
});
