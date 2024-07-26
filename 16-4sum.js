// Given an array nums of n integers, return an array of all the unique quadruplets 
// [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target

// SOLUTION - approach 1 - brute force 4 loops for a, b, c, d and taking sum of all 4 elements and checking if it is equal to target
// Approach 2 - hashset - 3 loops for a, b, c and taking sum of a, b, c and checking if target - sum is in hashset
//  Approach 3- sorting the given array, and then using 3 loops for a, b, c and using two pointer approach for d

