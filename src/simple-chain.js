const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value = value === 'undefined' ? '' : value
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if(typeof position !== 'number' || position > this.chain.length || position < 1 || !Number.isInteger(position)) {
      this.chain = []
      throw new Error("You can't remove incorrect link!") }
    this.chain = this.chain.filter((_, index) => index !== position-1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let chainNew = this.chain.map(item => `( ${item} )`).join('~~')
    this.chain = []
    return chainNew
  }
};

module.exports = {
  chainMaker
};
