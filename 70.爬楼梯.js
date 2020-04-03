/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} 
 * @return {number}
 */


var climbStairs = function(n) {
    if (n<3) return n
    let temp=[1,1]
    for (let i = 2; i <= n; i++) {
       temp[i]=temp[i-1]+temp[i-2]
    }
    return temp[n]
}

// @lc code=end

