/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0
  while(num >= 10) {
    sum = sum + num % 10
    num = Math.floor(num/10)
    if(num < 10) {
      num = num + sum 
      sum = 0
    }
  }
  return num
};