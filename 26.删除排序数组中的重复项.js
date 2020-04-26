/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    console.log(nums)
    if(nums.length == 1){
        return 1
    }
    let i = 1, length = nums.length;
    while(i < length){
        if(nums[i] == nums[i-1]){
            nums.splice(i, 1);
            length--
        } else{
           i++ 
        }
    }
    return nums.length
};
// @lc code=end

