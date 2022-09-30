/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set()
  while(!set.has(n)) {
    set.add(n)
    let sqSum = 0
    while(n > 0) {
      sqSum = sqSum + Math.pow((n % 10), 2)
      n = Math.floor(n/10)
    }
    n = sqSum
    if(n === 1) return true 
  }
  return false 
};