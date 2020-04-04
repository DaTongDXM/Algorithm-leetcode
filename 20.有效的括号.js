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
    if(typeof s!=='string') return
    let len=s.length
    if(len%2) return false
    let temp={
        '(':-1,
        ')':1,
        '[':-2,
        ']':2,
        '{':-3,
        '}':3,
    }
    let arr=[]
    
    for (let i = 0; i < len; i++) {
        if(temp[s[i]]<0){
            arr.push(s[i])
        }else{
           let peek=arr.pop()
           if(temp[peek]+temp[s[i]]!==0) return false
        }
      
    }
    if(arr.length>0)return false
    return true
};
// @lc code=end

