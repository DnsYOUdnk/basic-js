const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [],
      str = n.toString();
      for(let i = 0; i < str.length; i++) {
        let newNum = str.split('');
            newNum.splice(i,1)
        arr.push(newNum.join(''))
      }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
