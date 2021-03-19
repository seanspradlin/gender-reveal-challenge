const { expect } = require('chai');
const { getMilestone } = require('./milestone');

describe('milestone', () => {
  describe('getMilestone', () => {
    it('should be a function', () => {
      expect(getMilestone).to.be.a('function');
    });

    it('should return a different string upon each call', () => {
      const result1 = getMilestone();
      const result2 = getMilestone();
      expect(result1).to.equal('rolling');
      expect(result2).to.equal('standing');
    });

    it('should loop back to the beginning', () => {
      const result1 = getMilestone();
      const result2 = getMilestone();
      const result3 = getMilestone();
      const result4 = getMilestone();
      const result5 = getMilestone();
      const result6 = getMilestone();
      const result7 = getMilestone();
      const result8 = getMilestone();
      const result9 = getMilestone();
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
