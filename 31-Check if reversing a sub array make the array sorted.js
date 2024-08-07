// Given an array of n distinct integers.
// The task is to check whether reversing any one sub-array can make the array sorted or not.
// If the array is already sorted or can be made sorted by reversing any one subarray, print “Yes“, else print “No“.

function checkReverse(arr, n) {
  // Copying the array.
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[i] = arr[i];
  }

  // Sort the copied array.
  temp.sort();

  // Finding the first mismatch.
  let front;
  for (front = 0; front < n; front++) {
    if (temp[front] != arr[front]) {
      break;
    }
  }

  // Finding the last mismatch.
  let back;
  for (back = n - 1; back >= 0; back--) {
    if (temp[back] != arr[back]) {
      break;
    }
  }

  // If whole array is sorted
  if (front >= back) {
    return true;
  }

  // Checking subarray is decreasing or not.
  do {
    front++;
    if (arr[front - 1] < arr[front]) {
      return false;
    }
  } while (front != back);

  return true;
}

// Driver Code

let arr = [1, 2, 5, 4, 3];
let n = arr.length;

if (checkReverse(arr, n)) {
  document.write("Yes");
} else {
  document.write("No");
}
