// problem : Sort a linked list of 0s, 1s and 2s
// Given a linked list of 0s, 1s and 2s, The task is to sort and print it.

// Examples:

// Input: 1 -> 1 -> 2 -> 0 -> 2 -> 0 -> 1 -> NULL
// Output: 0 -> 0 -> 1 -> 1 -> 1 -> 2 -> 2 -> NULL

// Solution:
// linkedlist
class Node {
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}

let cnt = [0, 0, 0];
let ptr = head;
while (ptr != null) {
  cnt[ptr.data] += 1;
  ptr = ptr.next;
}
let index = 0;
ptr = head;

while (ptr !== null) {
  if (cnt[index] === 0) {
    idx += 1;
  } else {
    ptr.data = index;
    cnt[index] -= 1;
    ptr = ptr.next;
  }
}
