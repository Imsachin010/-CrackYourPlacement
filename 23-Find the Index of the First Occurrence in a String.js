// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//Solution
// Approach 1 - using nested loop for given characters and matching with the sub string

var strStr = function(haystack, needle) {
    if(haystack === needle || needle === "") return 0;

    for(let i = 0; i < haystack.length; i++ ){
        if(haystack[i] = needle[0]){
            let sub = haystack.substring(i, i+needle.length);
            if(sub === needle){
                return i
            }
        }
    }
    return -1;
};