// Problem:
// Given two arrays of equal size n and an integer k. 
// The task is to permute both arrays such that sum of their corresponding element is greater than or equal to k i.e a[i] + b[i] >= k. 
// The task is to print “Yes” if any such permutation exists, otherwise print “No”.

// Solution : 
// Approach 1 - sorting both the arrays and checking if sum is less than K, then will return false else no
// Approach 2 - using two pointers to check if sum is greater than K