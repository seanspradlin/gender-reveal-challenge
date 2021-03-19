/**
 * This function merges two names together and alternates their characters
 * between the two. If one name is longer than the other, then shorter name
 * needs to be padded with spaces.
 *
 * @param {string} name1
 * @param {string} name2
 *
 * @example
 * const name1 = 'Foo Bar';
 * const name2 = 'Barbaz Bazinga'
 * interpolateNames(name1, name2) // returns 'FaobBzrB z n a'
 *
 * @returns {string}
 */
function interpolateNames(name1, name2) {
  const maxLength = Math.max(name1.length, name2.length);
  let result = '';
  for (let i = 0; i < maxLength; i += 1) {
    if (i % 2) {
      result += name2[i] || ' ';
    } else {
      result += name1[i] || ' ';
    }
  }
  return result;
}

module.exports = { interpolateNames };
