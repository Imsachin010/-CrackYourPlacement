//Problem : Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// SOLUTIONS
// Brute force
// solving problem with regular quick sort

var removeDuplicates = function(nums) {
    swapNum = 1;

    for(let i=0; i < nums.length -1; i++){
        if(nums[i] !== nums[i+1]){
            nums[swapNum] = nums[i+1];
            swapNum++;
        }
    }
    return swapNum
};