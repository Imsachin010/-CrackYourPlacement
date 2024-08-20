// Problem : Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Solution:
// Approach 1 :traversing each character, also checking #to reconstruct the string and then comparing them
// Approach 2: Traversing backward and comparing the characters
// Approach 3 : Using stack to store the characters and then comparing them
// Approach 4: using hashing to store the characters and then comparing them
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // Helper function to process the backspaces in the string
    const buildString = function(str) {
        let result = [];
        for (let char of str) {
            if (char === '#') {
                if (result.length > 0) {
                    result.pop(); 
                }
            } else {
                result.push(char); 
            }
        }
        return result.join(''); 
    };
    
    return buildString(s) === buildString(t);
};


let s = "a#c";
let t = "b";
console.log(backspaceCompare(s, t)); // Output should be false

