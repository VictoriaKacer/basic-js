const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    
  }
  calculateDepth(arr) {
    let counter = 1;
    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        counter = 1 + this.calculateDepth(item);
       
        
      } 
     
    }
    if (counter > depth) {
      depth = counter; 
    }
    
    return depth;
  }
  
  };
  // 1 не прохожу


  // 1 не прохожу