/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let tMap = {}
    
    for(const char of t) {
        if(!(char in tMap)) {
            tMap[char] = 1
        } else {
            tMap[char]++
        }
    }
    
    for(const char of s) {
        if(char in tMap) {
            tMap[char]--
        }
    }
    
    
    for(const key in tMap) {
        if(tMap[key] > 0) return key
    }
    
};