// Problem : Find Pair Given Difference
// Given an array arr[] of size n and an integer x, return 1 
// if there exists a pair of elements in the array whose absolute difference is x, otherwise, return -1.

// Solution 
/// Approach 1 - brute force - using nested loop to chwck all possible pairs and return 1 if the difference is x


// class Solution {
//     /**
//     * @param number n
//     * @param number x
//     * @param number[] arr

//     * @returns number
//     */
//     findPair(n, x, arr) {
//         // code here
//         for(let i=0; i < n; i++){
//             for(let j=1; j< n; j++){
//                 if(arr[j] - arr[i] = x) return 1;
            
//             }
//         }
//         return -1
// }}
