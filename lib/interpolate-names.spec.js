const { expect } = require('chai');
const { interpolateNames } = require('./interpolate-names');

describe('interpolate-names', () => {
  describe('interpolateNames', () => {
    it('should be a function', () => {
      expect(interpolateNames).to.be.a('function');
    });

    it('should merge two names together', () => {
      const name1 = 'John Foo';
      const name2 = 'Jane Bar';
      const expected = 'Jahe Bor';
      const result = interpolateNames(name1, name2);
      expect(result).to.equal(expected);
    });

    it('should pad uneven name lengths to match', () => {
      const name1 = 'Foo';
      const name2 = 'BarBaz';
      const expected = 'FaoB z';
      const result = interpolateNames(name1, name2);
      expect(result).to.equal(expected);
    });
  });
});
