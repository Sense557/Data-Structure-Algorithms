// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let result = [];
    let n = nums.length;
    for (let i = 0; i<n; i++) {
        nums [i] = (nums[i]**2);
    }
    
    nums.sort ((x, y) => x - y);
    return nums;
};