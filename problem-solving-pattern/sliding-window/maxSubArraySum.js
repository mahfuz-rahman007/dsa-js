/**
 * Find The Max Sub Array Sum From The Array and The Length of the array is the the number passed on function
 */

function maxSubarraySum(array, number){

    if(array.length < number) return null;

    let max = 0;
    for(let i = 0; i<number;i++){
        max += array[i];
    }

    let tempMax = max;
    for(let i = number; i < array.length; i++) {
        tempMax = (tempMax - array[i - number]) + array[i];

        if(tempMax > max) {
            max = tempMax;
        }
    }

    return max;
}


console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null