/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // loop over s
    // if s char found, delete rest of t string and only look at whats left
    for(let i = 0; i < s.length; i++) {
    if(t.includes(s[i])) {
      let index = t.indexOf(s[i]) + 1
      t = t.slice(index)
    } else return false 
  }
  return true
};