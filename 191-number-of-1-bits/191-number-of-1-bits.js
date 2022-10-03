/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
     let i = 32
     while(i) {
         if(n%2 !== 0) count++
         n = n >> 1
         i--
     }
    return count 
};