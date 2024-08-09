// Problem : Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
// Return the linked list sorted as well.

// Solution :
// Approach 1- Iterative
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let cur = head;
    while (cur) {
        while (cur.next && cur.next.val == cur.val) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return head;
};

console.log(deleteDuplicates([1, 1, 2])); // [1,2]