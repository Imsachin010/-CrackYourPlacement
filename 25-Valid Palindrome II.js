// Problem : Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// SOlution:
// Approach 1 - start deleting a character at a timeand using algo to check if it is palindrome
// Approach 2 - using two pointers to check if it is palindrome
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str.charAt(left) !== str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
    while(left < right){
        if(s.charAt(left) === s.charAt(right)){
            left++;
            right--;
        }
        else{
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }
    return true;
};

console.log(validPalindrome("abca")); //true