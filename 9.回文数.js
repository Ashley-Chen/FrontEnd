/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // const array = x.toString().split('');
    // let begin = [].concat(array);
    // const reverseArray = array.reverse();
    // if(begin.toString() == reverseArray.toString()){
    //     return true
    // }
    // return false
    if( x==0 ){
        return true
    }
    if(x < 0 || x % 10 == 0){
        return false
    }
    let i = 0, result = 0, start = x;
    while(start > result){
        const number = start % 10;
        start = parseInt(start / 10);
        if(start == result){
            return true
        }
        result = result * 10 + number;
        if(start == result){
            return true
        }
        ++i;
    }
    return false
};
console.log(isPalindrome(10))
// @lc code=end

