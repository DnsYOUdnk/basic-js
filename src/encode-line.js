const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let obj = {},
      encodeStr = '';
  str.split('').forEach((item, index) => {
      !obj[item] ? obj[item] = 1 : str[index-1] === item ? obj[item] += 1 : obj[item+item] = item;
  })
  for(item in obj) {
      encodeStr += (obj[item] > 1 ? obj[item] : '') + (item.length > 1 ? obj[item] : item)
  }
  return encodeStr 
}

module.exports = {
  encodeLine
};
