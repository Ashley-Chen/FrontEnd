/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2){
        return false
    }
    let arr = [], length = s.length;
    if(!length){
        return true
    }
    for(let i = 0; i < s.length; ++i){
        const arrLength = arr.length;
        if(s.charAt(i) == ')'){
            if(arrLength && arr[arrLength-1] == '('){
                arr.pop();
                continue;
            }
        }
        if(s.charAt(i) == ']'){
            if(arrLength && arr[arrLength-1] == '['){
                arr.pop();
                continue;
            }
        }
        if(s.charAt(i) == '}'){
            if(arrLength && arr[arrLength-1] == '{'){
                arr.pop();
                continue;
            }
        }
        arr.push(s.charAt(i))
    }
    return !arr.length
};
isValid('()')
// @lc code=end

