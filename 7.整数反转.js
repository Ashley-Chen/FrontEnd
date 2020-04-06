/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // const array = x.toString().split('');
    // const reverseArray = array.reverse();
    // let length = reverseArray.length;
    // if(length == 1){
    //     return x
    // }
    // let symbol = ''
    // if(reverseArray[length - 1] == '-' || reverseArray[length - 1] == '+'){
    //     symbol = reverseArray[length - 1];
    //     reverseArray.pop();
    // }
    // if(reverseArray[0] == '0'){
    //     reverseArray.shift();
    // }
    // length = reverseArray.length;
    // let resultString = reverseArray.join('');
    // const max = (Math.pow(2,31)).toString();
    
    // if(length < max.length){
    //     return parseInt(symbol + resultString)
    // }
    // let result = 0;
    // for(let i = 0; i < length; ++i) {
    //     if(reverseArray[i] < max.charAt(i)){
    //         result =  parseInt(symbol + resultString)
    //         break
    //     } else if(reverseArray[i] > max.charAt(i)) {
    //         result = 0
    //         break
    //     }
    //     // 相等比较下一位
    //     if(i == length -1 && symbol == '-'){
    //         result =  parseInt(symbol + resultString)
    //     }
    // }
    // return result
    const array = x.toString().split('');
    let length = array.length;
    if(length < 2){
        return x
    }
    const reverseArray = array.reverse();
    let symbol = '';
    if(reverseArray[length - 1] == '-' || reverseArray[length - 1] == '+'){
        symbol = reverseArray[length-1];
        reverseArray.pop();
    }
    for(let i = 0; i < length; i++){
        if(reverseArray[i] == 0){
            reverseArray.shift();
            continue;
        }
        break;
    }
    // js超出数据并没有抛出异常，因此try-catch不能用
    try{
        const result = parseInt(symbol + reverseArray.join(''));
        return result
    } catch (err){
        return 0
    }
};
console.log(reverse(1534236469))
// @lc code=end

