// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken. Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// solution 
// Approach 1 - brute force - 2 loops - one for left and one for right
// Approach 2 - sort the array and then take the sum of first k elements and then keep on adding the last element and removing the first element

var maxScore = function(cardPoints, k) {
    let lsum = 0;
    let rsum = 0;
    for (let i = 0; i < k; i++) {
        lsum += cardPoints[i];
    }
    let maxSum = lsum;
    for (let i = 0; i < k; i++) {
        lsum -= cardPoints[k - 1 - i]; 
        rsum += cardPoints[cardPoints.length - 1 - i]; 
        maxSum = Math.max(maxSum, lsum + rsum); 
    }

    return maxSum;
};
console.log(maxScore([1,2,3,4,5,6,1],3)); // 12