/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    for(let i = 0; i <= n; i++) {
        const count = helper(i)
        ans.push(count)
    }
    return ans 
};

let helper = (i) => {
    let count = 0
    while(i > 0) {
        if(i%2 === 1) {
            count++
        }
        i = i>>1
    }
    return count 
}