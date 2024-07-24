// Problem :  Find All Duplicates in an Array
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Solution
var findDuplicates = function(nums) {
    const numCount = {};
    for ( let num of nums ){
        numCount[num] = (numCount[num] || 0) +1;

    }
    const duplicates = [];
    for (let key in numCount){
        if(numCount[key] > 1 ){
        duplicates.push(key);
        }
    }
    return duplicates
};