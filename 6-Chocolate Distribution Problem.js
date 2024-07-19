//Problem :Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that : 1. Each student gets exactly one packet. 2.The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

// SOLUTION 

// sor the array in ascending order 
// find the minimum difference between the first and last element of the array

class Solution{
    findMinDiff(arr,n,m){
        //code here
        arr.sort((a, b) => a - b);
        let minDiff = Infinity;
        for(let i =0; i+m-1 < n; i++){
            let diff = arr[i + m - 1] - arr[i];
            minDiff= Math.min(minDiff,diff )
        }
        return minDiff
    }
}