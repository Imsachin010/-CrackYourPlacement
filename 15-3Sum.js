// Problem: 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//Solution : 
//Approach 1 - Brute Force
// approach 2 - Two Pointer

var threeSum = function (nums) {
    let ans = [];
    if (nums.length < 3) return ans;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let start = i + 1; end = nums.length - 1;
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];

            if (sum === 0) {
                ans.push([nums[i], nums[start], nums[end]]);
                start += 1;
                end -= 1;
                while(start < end && nums[start] === nums[start -1]) start +=1;
                while(start < end && nums[end] === nums[end + 1]) end -=1;
            } else if (sum < 0) start += 1;
            else if (sum > 0) end -= 1;

        }
    }
    return ans;
};