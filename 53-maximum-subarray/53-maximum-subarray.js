/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0]
    let currentSum = nums[0]
    let maxSum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        let calc = Math.max(nums[i], nums[i] + currentSum)
        if (calc > maxSum) maxSum = calc 
        currentSum = calc
    }
    return maxSum
    
};