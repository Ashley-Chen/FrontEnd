/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    const array = s.split('');
    let symbol = true;
    const length = array.length;
    let result = 0;
    for(let i = 0; i < length-1; ++i){
        if(romanMap.get(array[i]) < romanMap.get(array[i+1])){
            symbol = false
        }
        if(symbol){
            result += romanMap.get(array[i])
        } else{
            result -= romanMap.get(array[i])
            symbol = true
        }
    }
    result += romanMap.get(array[length-1])
    return result;
};
// @lc code=end

