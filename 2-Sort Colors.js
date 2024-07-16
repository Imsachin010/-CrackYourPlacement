// problem : Sort Colors 
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// SOLUTIONS
// Brute force
// solving problem with regular quick sort
// solving with in place


var sortColors = function(nums) {
    let left = 0;
    let right = nums.length -1;
    let curr = 0;

    while(curr <= right){
        if (nums[curr] === 0){
            [nums[left], nums[curr]] = [nums[curr], nums[left]];
            left++;
            curr++;

        } else if(nums[curr] === 2){
            [nums[curr], nums[right]] = [nums[right], nums[curr]];
            right--;
            
        }else {
            curr++
        }
    }
};