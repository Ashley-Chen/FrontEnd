/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1){
        return 1
    }
    if(n == 2){
        return 2
    }
    const result = [1, 2]
    // return climbStairs(n-1) + climbStairs(n-2)
    for(let i = 2; i < n; i++){
        result[i] = result[i-1] + result[i-2]
    }
    return result[n-1]
};

// 0-1背包问题
const weights = [2,4,1,5,7]
const values = [4,1,5,3,2]
const W = 10;
const knapsack = function(weights, values, W) {
    const n = weights.length;
    const f = new Array(n);
    f[-1] = new Array(W+1).fill(0);
    for(let i = 0; i < n; i++){
        f[i] = new Array(W).fill(0);
        for(let j = 0; j <= W; j++){
            if(weights[i] > j){
                f[i][j] = f[i-1][j]
            } else {
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i])
            }
        }
    }
    let flag = W;
    for(let i = n-1; i >= 0; --i){
        if(f[i][flag] > f[i-1][flag]){
            flag -= weights[i]
            console.log(i)
        }
    }
    console.log(f[4][10])
}
knapsack(weights, values, 10)

// @lc code=end

