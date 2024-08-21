// Problem : Excel Sheet Column Title
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// Solution 
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = '';
    while(columnNumber> 0){
       let rem = (columnNumber - 1 )%26;
       res = String.fromCharCode('A'.charCodeAt(0) + rem ) + res;
       columnNumber = Math.floor((columnNumber - 1 ) / 26)
    }
    return res;
};
console.log(convertToTitle(1)) // A