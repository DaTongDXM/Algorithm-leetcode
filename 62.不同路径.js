/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var arr=new Array(m);
    for (let i = 0; i < n; i++) {
        arr[i]=new Array(m)
        arr[i][0]=1
    }
    for (let j = 0; j < m; j++) {
        arr[0][j]=1
    }
    for (let p = 1; p < n; p++) {
       for (let q = 1; q < m; q++) {
           arr[p][q]=arr[p-1][q]+arr[p][q-1]
       }
    }
    return arr[n-1][m-1]
};
// @lc code=end

