// Intersection of two ll
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.
//SOLUTION 
// Approach 1 : Traversing both the LL and then matching the nodes
// Approach 2 : Using Hashing
// Approach 3 : Using two pointers and any pointer which eaches to null just change the pointer to the head of the other LL and then traverse both the LL and then matching the nodes
// Approach4 : using two dummy nodes and finding length then taking the difference and then traversing the longer LL by the difference and then traversing both the LL and then matching the nodes

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // using two pointer 
    if(!headA || !headB) return null;
    let a = headA;
    let b = headB;

    while(a !== b){
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};

console.log(getIntersectionNode([4,1,8,4,5],[5,6,1,8,4,5])) // [8,4,5]