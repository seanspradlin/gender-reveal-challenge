const { expect } = require('chai');
const { milestoneGenerator } = require('./milestone');

describe('milestone', () => {
  describe('milestoneGenerator', () => {
    it('should be a function', () => {
      expect(milestoneGenerator).to.be.a('function');
    });

    it('should return an iterator', () => {
      const iterator = milestoneGenerator();
      expect(typeof iterator[Symbol.iterator]).to.equal('function');
    });

    it('should output the correct responses in order', () => {
      const iterator = milestoneGenerator();
      const results = Array.from(iterator);
      expect(results).to.deep.equal([
        'rolling', 'standing', 'crawling', 'dancing',
        'walking', 'running', 'bicycling', 'driving',
      ]);
    });
  });
});
