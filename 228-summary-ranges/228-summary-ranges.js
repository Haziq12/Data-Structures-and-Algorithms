/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
     let ranges = []
  let start = nums[0]
  let end = nums[0]
  let index = 0
  while(index < nums.length) {
    if(nums[index] + 1 !== nums[index + 1]) {
      ranges.push(`${nums[index]}`)
    } else {
      start = nums[index]
      while(nums[index] + 1 === nums[index + 1]) {
        end = nums[index + 1]
        index++
      }
      ranges.push(`${start}->${end}`)
    }
    index++
  }
    return ranges
};