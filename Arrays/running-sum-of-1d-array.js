// Given an array nums. 
// We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// https://leetcode.com/problems/running-sum-of-1d-array/

const runningSum = function(nums) {
    //we know that nums[0] = ans[0]
    const ans = [];
    ans.push(nums[0]);
    // for loop solution, loop over each num in nums
    for (let i = 1; i < nums.length; i++) {
        let sum = 0;
        // another for loop that adds all indices from 0 to i, push into ans
        for (let j = 0; j <= i; j++) {
        sum+=nums[j]    
        }
        ans.push(sum);
    }
    return ans;
};

//Optimized
const runningSum2 = function(nums) {
    const ans = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i]    
        ans.push(sum);
    }
    return ans;
};

console.log(runningSum([1,2,3,4]));
// => [ 1, 3, 6, 10 ]
console.log(runningSum([1,1,1,1,1]));
//=> [ 1, 2, 3, 4, 5 ]
console.log(runningSum([3,1,2,10,1]));
// => [ 3, 4, 6, 16, 17 ]

// Optimized
console.log(runningSum2([1,2,3,4]));
// => [ 1, 3, 6, 10 ]
console.log(runningSum2([1,1,1,1,1]));
//=> [ 1, 2, 3, 4, 5 ]
console.log(runningSum2([3,1,2,10,1]));
// => [ 3, 4, 6, 16, 17 ]