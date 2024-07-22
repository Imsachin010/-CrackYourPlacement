// problem :Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.

// Solution :
// approach 1 : using an extra matrix and traversing through the matrix and storing the indexes of 0's in the extra matrix and then traversing through the extra matrix and setting the rows and columns to 0
// in place 

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let col0 = 1; // Flag to determine if the first column should be set to zero

    // Step 1: Mark rows and columns to be zeroed
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col0 = 0; // If any cell in the first column is zero, mark the entire first column to be zeroed
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark the row
                matrix[0][j] = 0; // Mark the column
            }
        }
    }

    // Step 2: Set matrix cells to zero based on the markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Handle the first row separately
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 4: Handle the first column separately
    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
// Example usage:
let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  setZeroes(matrix);
  console.log(matrix); // Output: [[1,0,1],[0,0,0],[1,0,1]]

