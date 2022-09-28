/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let result = []
    
    let firstRowSet = new Set("qwertyuiop".split(''));
    let secondRowSet = new Set("asdfghjkl".split(''));
    let thirdRowSet = new Set("zxcvbnm".split(''))
    
  for(let word of words) {
      let charSplit = word.toLowerCase().split('')
      if(charSplit.every(letter => firstRowSet.has(letter) ) ) {
          result.push(word)
      } else if(charSplit.every(letter => secondRowSet.has(letter))) {
          result.push(word)
      } else if(charSplit.every(letter => thirdRowSet.has(letter))) {
          result.push(word)
      }
  }
    return result
};