/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!(nums instanceof Array) || nums.length < 2){
        return false
    }
    const length = nums.length;
    const map = new Map();
    for(let i = 0; i < length; i++){
        if(map.has(nums[i])){
            return [map.get(nums[i]), i]
        }
        map.set(target-nums[i], i)
    }
    return false
};
// @lc code=end

