// Problem : Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Solution - 
// Approach 1- Iterate through the nodes and remove the value if it matches with given val
// Approach2 - use dummy node and two pointers to remove the node

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    let cur = head;

    while(cur){
        if(cur.val === val){
            prev.next = cur.next;
            cur = cur.next
        }else{
            prev = cur;
            cur = cur.next;
        }
    }
    return dummy.next;
};


console.log(removeElements([1,2,6,3,4,5,6], 6)); // [1,2,3,4,5]