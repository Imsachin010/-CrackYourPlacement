// problem : Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. 
//Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 
// Approach 1 - linear search
function findCeil(arr, x){
    let res = arr[0]
    if(x <= res) return res;
    for(let i =0; i<arr.length; i++){
        if(arr[i] >= x){
            res = arr[i];
            break;
        }
    }
    return res;
}
console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 5))