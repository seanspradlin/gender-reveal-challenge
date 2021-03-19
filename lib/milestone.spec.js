const { expect } = require('chai');
const { getMilestoneGenerator } = require('./milestone');

describe('milestone', () => {
  describe('getMilestoneGenerator', () => {
    it('should be a function', () => {
      expect(getMilestoneGenerator).to.be.a('function');
    });

    it('should return a different string upon each call', () => {
      const generator = getMilestoneGenerator();
      const result1 = generator();
      const result2 = generator();
      const result3 = generator();
      const result4 = generator();
      const result5 = generator();
      const result6 = generator();
      const result7 = generator();
      const result8 = generator();
      expect(result1).to.equal('rolling');
      expect(result2).to.equal('standing');
      expect(result3).to.equal('dancing');
      expect(result4).to.equal('crawling');
      expect(result5).to.equal('walking');
      expect(result6).to.equal('running');
      expect(result7).to.equal('bicycling');
      expect(result8).to.equal('driving');
    });

    it('should loop back to the beginning', () => {
      const generator = getMilestoneGenerator();
      const result1 = generator();
      const result2 = generator();
      const result3 = generator();
      const result4 = generator();
      const result5 = generator();
      const result6 = generator();
      const result7 = generator();
      const result8 = generator();
      const result9 = generator();
      expect(result1).to.equal('rolling');
      expect(result2).to.equal('standing');
      expect(result3).to.equal('dancing');
      expect(result4).to.equal('crawling');
      expect(result5).to.equal('walking');
      expect(result6).to.equal('running');
      expect(result7).to.equal('bicycling');
      expect(result8).to.equal('driving');
      expect(result9).to.equal('rolling');
    });
  });
});
