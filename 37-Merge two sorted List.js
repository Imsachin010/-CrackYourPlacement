// Problem: Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Solution : 
// Approach 1 : traversing all the elements in the list and comparing them to arrange in order
// approach 2 : use dummy node and two pointers to merge the two lists 
// Solution
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while(list1 && list2){
        if(list1.val <= list2.val ){
            prev.next = list1
            prev = list1;
            list1 = list1.next;
        }else{
            prev.next = list2
            prev = list2;
            list2 = list2.next;
        }
    }
    // if(!list1) prev.next = list2;
    // if(!list2) prev.next = list1;
    prev.next = list1 || list2;
    return dummy.next;
};

console.log(mergeTwoLists([1,2,4], [1,3,4])); // [1,1,2,3,4,4]