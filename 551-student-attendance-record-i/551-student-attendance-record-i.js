/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let attendance = s.split('')
    let [absent, late, present] = [0, 0, 0]
    for(let i = 0; i < attendance.length; i++) {
        if(attendance[i] === 'L') {
            late++
        }
        if(attendance[i + 1] !== 'L' && late < 3) {
            late = 0
        }
        console.log(late)
        if(attendance[i] === 'A') absent++ 
        if(attendance[i] === 'P') present++ 
    }
    
    if(absent < 2 && late < 3) {
        return true
    } else return false 
};