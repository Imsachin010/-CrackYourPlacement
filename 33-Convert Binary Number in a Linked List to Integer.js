// Problem : Convert Binary Number in a Linked List to Integer
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
//Return the decimal value of the number in the linked list. The most significant bit is at the head of the linked list.

// Solution 

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let sum = 0;
    while(head != null){
        sum = sum*2 + head.val
        head = head.next;
    }
    return sum
};
