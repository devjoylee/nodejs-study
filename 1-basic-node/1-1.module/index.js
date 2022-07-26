const { odd, even } = require('./var');
const checkOddOrEven = require('./func');

function checkStringLength(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkOddOrEven(10)); // 짝수입니다
console.log(checkStringLength('hello')); // 홀수입니다
