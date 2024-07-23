// Subarray sum divisible by K
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

// Solution 
// Approach 1 - taking all sub arrays adding them and checking if the sum is divisible by k
// Approach 2 - hashmap  for taking the frequency count of reminder of sum/k and then adding the frequency count to the result

var subarraysDivByK = function(nums, k) {
    let sum = 0;
    let rem = 0;
    let ans = 0;
    let map = {0: 1};
    for(let i =0; i < nums.length; i++){
        sum += nums[i];
        rem = sum % k;
        if(rem < 0){
            rem += k;
        }
        if (map[rem] !== undefined) {
            ans += map[rem];
        }
        map[rem] = (map[rem] || 0) + 1;
    }
    return ans
};