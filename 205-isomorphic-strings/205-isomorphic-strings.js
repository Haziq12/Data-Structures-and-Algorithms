/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {}
    let i = 0
    
    while(i < s.length) {
        if(s[i] in map) {
            if(map[s[i]] !== t[i]) {
                return false 
            } 
        } else {
            map[s[i]] = t[i]
            console.log(map)
        }
        i++
    }
    // let keys = Object.keys(map)
    let values = Object.values(map)
    let set = new Set(values)
    if (values.length !== set.size) return false 
    
    return true
};