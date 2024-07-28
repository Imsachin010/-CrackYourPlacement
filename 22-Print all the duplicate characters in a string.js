// Problem : Print all the duplicate characters in a string
// Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.
// Solution 
// Approach 1: sort the string elements, with an element count increment it with the duplicate occuring element.
// Approach 2: using hashing, to take counts and store them.

function printDuplicate(str){
    str = str.split('').sort().join('');
    for(let i=0; i < str.length; i++){
        let count = 1;

        while(i < str.length-1 && str[i] == str[i+1]){
            count++;
            i++;
        }
        if(count > 1){
            console.log(str[i] + " counts equal to " + count);
        }
    }
    
};

console.log(printDuplicate('RajaRamMohanRoy'));
