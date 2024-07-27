//problem:  Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// SOLUTION-1: Brute Force - add all the elements in two pointer and then check for all the subarrays
// Approach 2 -prefix sumation - keep on adding the elements and then check for the sum of the subarray
var subarraySum = function(nums, k) {
    let count = 0, preSum = 0;
    let map = new Map();
    map.set(0, 1);
    for(let i = 0; i < nums.length; i++){
        preSum += nums[i];
        let remove = preSum - k;

        if (map.has(remove)) {
            count += map.get(remove); 
        }

        if (map.has(preSum)) {
            map.set(preSum, map.get(preSum) + 1);
        } else {
            map.set(preSum, 1);
        }
    }

    return count;
};

console.log(subarraySum([1,1,1], 2))