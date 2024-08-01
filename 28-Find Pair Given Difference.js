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
// Approach 2 - using set to check value present in array or not
class Solution {
    /**
    * @param number n
    * @param number x
    * @param number[] arr

    * @returns number
    */
    findPair(n, x, arr) {
        // code here
        let set = new Set();
        for(let i=0; i < n; i++){
            if(set.has(arr[i] + x) || set.has(arr[i] - x)){
                return 1
            }
            set.add(arr[i]);
        }
        return -1
        
}
}
console.log(new Solution().findPair(5, 10, [40, 30, 100, 90, 20])) // 1