/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     nums = 1, 2, 3, 4
//     left = 1, 1, 2, 6
//     right = 
//     let solutionArray = []
//     let left = []
//     let right = []
    
//     for(let i = 0; i < nums.length; i++) {
//         if(left.length === 0){
//             left.push(1)
//         } else {
//             left.push(nums[i - 1] * left[i - 1])
//         }
//     }
    
//     for(let i = nums.length-1; i > -1; i--) {
//         if(right.length === 0) {
//             right.push(1)
//         } else {
//             right.unshift(nums[i + 1] * right[0])
//         }
//     }
    
//     console.log(left, right)
    
//     for(let i = 0; i < left.length; i++) {
//         solutionArray.push(left[i] * right[i])
//     }
    
//     return solutionArray
    
    
    let left = 1
    let product = 1
    let result = []
    for(let i = 0; i < nums.length; i++) {
        
        for(let j = i + 1; j < nums.length; j++) {
            product = product * nums[j]
        }
        result.push((product * left))
        left = left * nums[i]
        product = 1
    }
    return result 
};