/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 let num = []
    if(x < 0) num.push('-')   
    
 
    x = Math.abs(x)
  while((x)) {
      let lastDigit = x%10
      x = Math.floor(x/10)
      num.push(lastDigit)
  }
  x = Number(num.join(''))
    if(x > 2147483647 || x < -2147483647) return 0
  return x 
};