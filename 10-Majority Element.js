// Problem: Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Solution : 
// brute force - taking that element which is > n/2 times.Counting occurence of each element
// example [2,2,1,3,1,2,2] n=7, so n/2 = 3.5 we'll consider that element which has n =4 which is 2 
// Approach 2 : sorting elements, majority element will occupy 50% of array, always pass through n/2
// sorting and loking the middle element of the array
// approah 3: using HAsh table to store all numbers and its frequency 
// Approach 4: voting algorithm - 

var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for(num of nums){
        if(count===0){
            candidate = num
        }
        if(num === candidate){
            count += 1
        }else{
            count -= 1
        }
    }
    return candidate
};
console.log(majorityElement([1,1,8,1,2,7,7,7,7])) // output 7