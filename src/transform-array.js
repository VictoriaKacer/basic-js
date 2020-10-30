const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error
  let subArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      subArr.push(arr[i+1]);
      subArr.pop();
      i+=2;
    } else if (arr[i] === '--discard-prev' ) {
      subArr.pop();
    } else if (arr[i] === '--double-next') {
      subArr.push(arr[i+1]);
    } else if (arr[i] === '--double-prev') {
      subArr.push(arr[i-1]);
    } else {
      subArr.push(arr[i]);
    }
  }
  return subArr.filter((i) => i !== undefined)
};

// 1  не прохожу