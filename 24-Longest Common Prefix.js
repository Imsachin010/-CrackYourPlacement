// Problem : Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Solution
// Approach 1 - using a nested loop for given characters & match with the sub sting
// Approach 2 - using sort and compare with the last

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    strs.sort();
    let first = strs[0]
    let last = first.length;

    for(let i =0; i < strs.length; i++){
        let s = strs[i];

        while(s.substring(0, last) !== first){
            last--;
            if(last === 0) return "";
            first = first.substring(0, last)
        }
    }
    return first;
};
console.log(longestCommonPrefix("flower","flow","flight"))