/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const length = nums.length;
    let i = 0, j = length - 1;
    while( i <= j ){
        if(nums[i] == val){
            nums[i] = nums[j]
            j--
        } else{
            i++
        }
    }
    nums.splice(++j)
    return j++
};
// @lc code=end

