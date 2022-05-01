const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');
  
  let month = date.getMonth();
  return date = 0 <= month && month < 2 || month === 11 ? 'winter' : 2 <= month && month < 5 ? 'spring' : 5 <= month && month < 8 ? 'summer' : 'fall';
}

module.exports = {
  getSeason
};
