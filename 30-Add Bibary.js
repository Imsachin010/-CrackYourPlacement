// Given two binary strings a and b, return their sum as a binary string.

// Solution:
// Approach 1 : taking the binary no. from RHS, convert them to Integer number and adding them and then adding the carry
var addBinary = function(a, b) {
    let m = a.length - 1, n = b.length -1;
    let res= "";
    let carry = 0;
    for( let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry; i--, j--){
        let sum = (i >= 0 ? Number(a[i]) : 0) + (j >= 0 ? Number(b[j]) : 0) + carry;
        res = (sum % 2) + res;
        carry = Math.floor(sum/2);
    }
    return res
};