const stages = [
  'rolling',
  'standing',
  'dancing',
  'crawling',
  'walking',
  'running',
  'bicycling',
  'driving',
];

/**
 * This is a wrapper function to allow the generate to have its own state.
 * @returns {function}
 */
function getMilestoneGenerator() {
  let i = 0;
  /**
   * Create a function that takes no parameters but returns the next element in
   * the stages of mobility. Once you reach the end, start back over from the
   * beginning.
   *
   * @example
   * getMilestone() // returns 'rolling'
   * getMilestone() // returns 'standing'
   *
   * @returns {String}
   */
  function getMilestone() {
    if (i >= stages.length) {
      i = 0;
    }
    const value = stages[i];
    i += 1;
    return value;
  }

  return getMilestone;
}

module.exports = { getMilestoneGenerator };
