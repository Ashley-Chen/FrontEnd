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
    const length = nums.length;
    // for( var i = 0 ;i < length - 1; ++i ){
    //     for( var j = i + 1; j < length; ++j){
    //         if(nums[i] + nums[j] == target){
    //             return [i,j]
    //         }
    //     }
    // }
    let hashMap = new Map();
    for(let i = 0; i < length; ++i){
        const complete = target - nums[i]; // 
        if(hashMap.has(complete)){
            return [hashMap.get(complete), i]
        }
        hashMap.set(nums[i], i)
    }
};
// @lc code=end

