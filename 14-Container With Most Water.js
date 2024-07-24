// Problem : Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Solution 
// Approach 1 - Brute Force
// Approach 2 - Two Pointer

var maxArea = function(height) {
    let result = 0;
    let l = 0;
    let r = height.length - 1;

    while(l < r){
        area = (r - l) * Math.min(height[l], height[r])
        result = Math.max(result, area)

        if( height[l] < height[r]){
            l += 1;
        } else if(height[l] > height[r]){
            r -= 1;
        } else{
            r-=1;
        }
    }
    return result
};


console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49