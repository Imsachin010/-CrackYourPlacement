// Problem : Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Solution 
var isValid = function(s) {
    let stack = [];
    let  validStack= {"}":"{", "]":"[", ")":"("}

    for(let i of s){
        if(i === '(' || i === '[' || i === '{'){
            stack.push(i)
        }
        else{
            if(stack.length === 0 || stack.pop() !== validStack[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("(){}")); //true