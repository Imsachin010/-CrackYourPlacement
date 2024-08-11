// Problem : Multiply two linked lists
// Given elements as nodes of the two singly linked lists. 
// The task is to multiply these two linked lists, say L1 and L2.

//solution 
// approach 1 : convert the LL into integers and then multiply numbers to getthe result and then convert the result into linked list
// approach 2 : multiply each node of the linked list and then add the result to get the final result

/**
 * @param {Node} l1
 * @param {Node} l2
 * @return {number}
 */

// Use Bigint for javascript
function convertLL(head){
    let num = BigInt(0);
    while(head !== null){
        num = num * BigInt(10) + BigInt(head.data);
        head = head.next;
    }
    return num;
}

class Solution {
    multiplyTwoLists(first, second) {
        // Code Here
        let num1 = convertLL(first);
        let num2 = convertLL(second);
        let MOD = BigInt(10**9 + 7);
        let res = (num1 * num2) % MOD;
        return res
    }
    
}
