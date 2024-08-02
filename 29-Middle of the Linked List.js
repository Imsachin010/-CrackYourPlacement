// Problem : Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// SOLUTION:
// Approach 1: brute force - using loop to ttraverse the LL and store the values in an array and return th middle element of the array
// approach 2 : using two pointer slow and faster to find the middle element 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = head, fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;

    }
    return slow
};
console.log(middleNode([1,2,3,4,5])) // 3