const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw "Not implemented";
    }
    let KeyMassive = key.split("");
    let CryptoMassive = [];
    let id = 0;
    message.split("").forEach(element => {
      if (
        element.toUpperCase().charCodeAt() >= 65 &&
        element.toUpperCase().charCodeAt() <= 90
      ) {
        let cryptoSymbol =
          element.toUpperCase().charCodeAt() +
          KeyMassive[id].toUpperCase().charCodeAt() -
          65;
        if (cryptoSymbol > 90) {
          cryptoSymbol = cryptoSymbol - 90 + 64;
        }
        CryptoMassive.push(String.fromCharCode(cryptoSymbol));
        id += 1;
        if (id === KeyMassive.length) {
          id = 0;
        }
      } else {
        CryptoMassive.push(element);
      }
    });
    return CryptoMassive.join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw "Not implemented";
    }
    let KeyMassive = key.split("");
    let EncryptedMassive = [];
    let id = 0;
    encryptedMessage.split("").forEach(element => {
      if (
        element.toUpperCase().charCodeAt() >= 65 &&
        element.toUpperCase().charCodeAt() <= 90
      ) {
        let cryptoSymbol =
          element.toUpperCase().charCodeAt() -
          (KeyMassive[id].toUpperCase().charCodeAt() - 65);
        if (cryptoSymbol < 65) {
          cryptoSymbol = cryptoSymbol + 90 - 64;
        }
        EncryptedMassive.push(String.fromCharCode(cryptoSymbol));
        id += 1;
        if (id === KeyMassive.length) {
          id = 0;
        }
      } else {
        EncryptedMassive.push(element);
      }
    });
    return EncryptedMassive.join("");
  }
}

// 1 не прохожу

module.exports = VigenereCipheringMachine;
