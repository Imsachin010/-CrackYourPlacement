//Problem : You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Solution:
// brute force - compare each element with every other element and find the max difference
// in place solution: keep track of min element and max difference
// Time complexity: O(n)

var maxProfit = function(prices) {
    let maxProfit = 0;
    let l = 0;
    let r = 1;
    while( r < prices.length){
        if(prices[l] < prices[r]){
            profit = prices[r] - prices[l];
        maxProfit = Math.max(maxProfit, profit)
        }else{
            l = r
        }
        r++;
        
    }
    return maxProfit;
};