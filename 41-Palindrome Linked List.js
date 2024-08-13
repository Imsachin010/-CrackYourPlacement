// Problem : Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Solution
// Approach 1: a LL is palindrome if the reverse of the LL is same as the original LL, so just reverse the LL and compare it with the original LL
// Approach 2 : A LL is symmetric at middle, so we can find the middle of the LL and then reverse the second half of the LL and compare it with the first half of the LL, LIFO using stack
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head,
    slow = head;
  // to find middle
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast !== null) {
    slow = slow.next;
  }
  // Rewverse the 2nd half
  slow = reverseList(slow);
  fast = head;

  // Matching
  while (slow !== null) {
    if (fast.val !== slow.val) return false;
    fast = fast.next;
    slow = slow.next;
  }
  return true;
  function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
};
