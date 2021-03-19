const { interpolateNames } = require('./interpolate-names');
const { getMilestoneGenerator } = require('./milestone');

/**
 * Creates a token from the provided values
 *
 * Using the milestone generator and name interpolator, create a token by doing
 * the following:
 *
 * 1. Merge the mother and father's name together
 * 2. For each year together, grab the next milestone and interpolate the
 *    product of step 1 with the milestone
 * 3. Repeat steps 2 with the new product until all years complete
 * 4. Remove any spaces and return the token in all uppercase
 * @param {object} params
 * @param {string} params.mother Mother's name
 * @param {string} params.father Father's name
 * @param {number} params.yearsTogether Years parents have been together
 * @returns {string}
 */
function generateToken({ mother, father, yearsTogether }) {
  let token = interpolateNames(mother, father);
  const generator = getMilestoneGenerator();
  for (let i = 0; i < yearsTogether; i += 1) {
    const milestone = generator();
    token = interpolateNames(token, milestone);
  }
  token = token.replace(/ /g, '').toUpperCase();
  return token;
}

module.exports = { generateToken };
