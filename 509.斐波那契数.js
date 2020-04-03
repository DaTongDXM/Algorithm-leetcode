/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/*递归，很耗时 112ms*/
// var fib = function(N) {
//     if(N===0){
//         return 0
//     }else if(0<N&&<3){
//         return 1
//     }
//     else{
//         return fib(N-1)+fib(N-2)
//     }
// };

//采用动态规划 72ms
var fib=function(N){
    let temp=[0,1,1]
    for (let i = 3; i <= N; i++) {
        temp[i]=temp[i-1]+temp[i-2]
    }
    return temp[N]
}
// @lc code=end

