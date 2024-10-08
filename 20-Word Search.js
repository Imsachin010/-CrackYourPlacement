// problem : Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// SOlution
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;

    var dfs = function(i, j, len) {
        if (len == word.length) return true; 
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[len]) return false; 

        let temp = board[i][j];
        board[i][j] = "*"; 
        let res = dfs(i + 1, j, len + 1) || dfs(i - 1, j, len + 1) ||
                  dfs(i, j + 1, len + 1) || dfs(i, j - 1, len + 1);

        board[i][j] = temp;
        return res;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) { 
                return true;
            }
        }
    }
    return false; 
};

// Example usage:
let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];
let word = "ABCCEDFSA";
console.log(exist(board, word)); // Expected output: true