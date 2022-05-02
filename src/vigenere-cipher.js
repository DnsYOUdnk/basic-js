const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.typeMachine = type == undefined ? true : type;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error ('Incorrect arguments!') 

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = [];
    const startUnic = 65;
    let j = 0;

    for(let i = 0; i < message.length; i++) {
      if(/[A-Z]/.test(message[i])) {
        let value = ((message[i].charCodeAt() + key[j%key.length].charCodeAt()) - 2*startUnic)%26 + startUnic;
        encryptMessage.push(String.fromCharCode(value))
        j++
      } else {
        encryptMessage.push(message[i]);
      }
    }
    return encryptMessage = this.typeMachine ? encryptMessage.join('') : encryptMessage.reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error ('Incorrect arguments!') 
  
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptMessage = [];
    const startUnic = 65;
    let j = 0;

    for(let i = 0; i < message.length; i++) {
      if(/[A-Z]/.test(message[i])) {
        let value = ((message[i].charCodeAt() - key[j%key.length].charCodeAt()) + 26)%26 + startUnic;
        decryptMessage.push(String.fromCharCode(value))
        j++
      } else {
        decryptMessage.push(message[i]);
      }
    }
    return decryptMessage = this.typeMachine ? decryptMessage.join('') : decryptMessage.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
