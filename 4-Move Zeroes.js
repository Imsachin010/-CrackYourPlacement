// Problem : Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// SOLUTION
// brute force - separate zeroes and other non zero digits in two diff arrays with same relative order 
// in place solution: relative orderof non zero, move them to beginning

var moveZeroes = function(nums) {
    let insertElement = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] != 0){
            nums[insertElement] = nums[i];
            insertElement++;
        }
    }
    // filling the rest of the array with zeroes
    while(insertElement < nums.length){
        nums[insertElement] = 0;
        insertElement++;
    }
};
console.log(moveZeroes([0,1,0,3,12]));