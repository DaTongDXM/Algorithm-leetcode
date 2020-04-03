/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */ 
var twoSum = function(nums, target) {
    let result=[]
    if(!Array.isArray(nums)){
        return 
    }
    for (let i = 0; i < nums.length; i++) {
        let temp=target-nums[i]
        if(result[temp]!=undefined){
            return [result[temp],i]
        }
        result[nums[i]]=i
    }
    

};
// @lc code=end

