const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrNum = [...arr],
      oneM = [],
      id = 0;
      arrNum = arrNum.sort((a,b) => a-b).filter(item => item !== -1)
      oneM = arr.map((item, index) => {
        if(item == -1) {
          id++
          return item
        }
        return arrNum[index-id]
      })
  return oneM
}

module.exports = {
  sortByHeight
};
