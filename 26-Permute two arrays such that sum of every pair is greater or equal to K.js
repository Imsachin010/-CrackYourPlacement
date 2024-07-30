// Problem:
// Given two arrays of equal size n and an integer k. 
// The task is to permute both arrays such that sum of their corresponding element is greater than or equal to k i.e a[i] + b[i] >= k. 
// The task is to print “Yes” if any such permutation exists, otherwise print “No”.

// Solution : 
// Approach 1 - sorting both the arrays and checking if sum is less than K, then will return false else no
// Approach 2 - using two pointers to check if sum is greater than K

function isEqualSum(a1, a2, n,k){
    a1.sort((a,b) => a - b);
    a2.sort((a,b) => a - b);

    for(let i = 0; i < n; i++){
        if(a1[i] + a2[i] < k) return "false";
    }
    return "true";
}

console.log(isEqualSum([2, 1, 3], [ 7, 8, 9], 3, 10)); //Yes