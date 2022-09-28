/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let [count, number] = [0, 0]
    for(const num of nums) {
        if(num in obj) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    }
    
    for(const key in obj) {
        if(obj[key] > count) {
            count = obj[key]
            number = key
        } 
    }
    return number
};