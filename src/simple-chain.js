const CustomError = require("../extensions/custom-error");



  const chainMaker = {
    chain: [],

    getLength() {
      return this.chain.length;
    },
    addLink(value) {
      this.chain.push(value.toString())
      return this
      
    },
    removeLink(position) {
      return this.chain.splice(position);
    },
    reverseChain() {
      this.mas.reverse();
      return this;
    },
    finishChain() {
      let result = '';
  
      console.log(result);
  
      for (let i = 0; i < this.chain.length - 1; i++){
        result += '( ' + this.chain[i] + ')~~';
      }
      if(this.chain.length > 0) result += '( ' + this.chain[this.chain.length-1] + ' )';
  
      this.chain = [];
      return result;
      return this;
    },
  };
  
  // не прохожу

module.exports = chainMaker;