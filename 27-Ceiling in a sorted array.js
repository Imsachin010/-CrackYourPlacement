// problem : Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. 
//Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 

// Approach 1 - brute force
// function findCeil(arr, x){
//     let res = arr[0]
//     if(x <= res) return res;
//     for(let i =0; i<arr.length; i++){
//         if(arr[i] >= x){
//             res = arr[i];
//             break;
//         }
//     }
//     return res;
// }
// console.log(findCeil([1, 2, 8, 10, 10, 12, 19], 5))

// Approach 2 - liner search
function CeilSearch(arr, low, high,x){
    if(x <= arr[low]) return arr[low];

    for(let i = low; i < high; i++){
        if(arr[i] == x) return arr[i];

        if(arr[i] < x && arr[i+1] >= x){
            return arr[i+1];
        }
    }
    return -1;
    
};

console.log(CeilSearch([1, 2, 8, 10, 10, 12, 19], 0, 6, 5)) //8