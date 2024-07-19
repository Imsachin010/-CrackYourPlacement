//Problem : Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Solution :
var twoSum = function(nums, target){
    let numSet = new Set();
    for (let i =0; i < nums.length; i++){
        let Diff = target - nums[i];
        if(numSet.has(Diff)){
            const difindex = nums.indexOf(Diff);
            return [difindex, i]
        } else {
            numSet.add(nums[i]);
        }
    }
}