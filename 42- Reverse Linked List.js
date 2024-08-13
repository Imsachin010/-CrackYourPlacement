// Problem : Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Solution Iterating through nodes and reversing the pointers
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
    }
    return prev;
};