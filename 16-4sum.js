// Given an array nums of n integers, return an array of all the unique quadruplets 
// [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target

// SOLUTION - approach 1 - brute force 4 loops for a, b, c, d and taking sum of all 4 elements and checking if it is equal to target
// Approach 2 - hashset - 3 loops for a, b, c and taking sum of a, b, c and checking if target - sum is in hashset
//  Approach 3- sorting the given array, and then using 3 loops for a, b, c and using two pointer approach for d

var fourSum = function (nums, target) {
    result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue; // to avoid duplicates
        for (let j = i + 1; j < nums.length; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) continue;
            let k = j + 1, l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (k < l && nums[k] == nums[k - 1]) {
                        k++;
                    }
                    while (k < l && nums[l] == nums[l + 1]) {
                        l--;
                    }
                } else if (sum < target) {
                    k++;
                } else {
                    l--
                }

            }
            l
        }
    }
    return result;
};
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); 
// results [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]