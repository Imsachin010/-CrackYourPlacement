// Problem : Product array puzzle
// Given an array nums[], construct a Product Array nums[] such that nums[i] is equal to the product of all the elements of nums except nums[i].

// Solution
/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    productExceptSelf(nums) {
        // code here
        let n = nums.length;
        let res = new Array(n).fill(1);
        let LP = 1; 
        let RP = 1;
        
        for(let i =0; i < n; i++){
            res[i] = LP;
            LP *= nums[i]
        }
        
        for(let i =n-1; i >= 0; i--){
            res[i] *= RP;
            RP *= nums[i]
        }
        return res;
    }
}
console.log(new Solution().productExceptSelf([10, 3, 5, 6, 2])) // [180, 600, 360, 300, 900]