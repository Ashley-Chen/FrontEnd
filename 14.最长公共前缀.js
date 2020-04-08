/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return ''
    }
    let result = strs[0];
    if(strs.length == 1){
        return result;
    }
    for(let i = 1; i < strs.length; ++i){
        result = commonPrefix(result, strs[i])
        if(result){
            continue
        } else{
            return ''
        }
    }
    return result
};

const commonPrefix = ( str1 = '', str2 = '' ) => {
    let length = str1.length;
    while(str2.indexOf(str1) != 0 && length){
        str1 = str1.slice(0, length-1);
        length = str1.length;
    }
    return str1;
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
// @lc code=end

