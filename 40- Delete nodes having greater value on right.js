// Problem : Delete nodes having greater value on right
// Given a singly linked list, remove all the nodes with any node on their right whose value is greater and return the head of the modified linked list.  
// (Not just the immediate Right, but the entire List on the Right

// Solution
// Approach 1: traverse each node and check if the next node has a greater value, if yes, delete the next node
// Approach 2: Reverse the entire LL , finding the current max node and deleting the nodes with lesser value

class Solution {
    
    compute(head){
        // your code here
        head = reverseList(head);
        let maxVal = head.data;
        let curr = head.next, prev = head;
        while(curr !== null){
            if(curr.data >=   maxVal){
                prev= curr;
                maxVal = curr.data;
            }
            else{
                prev.next = curr.next;
            }
            curr= curr.next;
        }
        return reverseList(head)
        function reverseList(head) {
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
    }
}

console.log(new Solution().compute([12, 15, 10, 11, 5, 6, 2, 3]).join(' ') === '15 11 6 3');