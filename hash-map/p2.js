/**
 * Given an integers of array and target. return a subarray of index whose contagious value add to the target
 */

function subarray_sum(array, target) {

    let map = new Map();
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        count += array[i];

        if(map.get((count-target)) || map.get((count-target)) === 0) {
            return [map.get((count-target)) + 1, i];
        } else {
            map.set(count, i);
        }
        
    }

    return [];

}


console.log(subarray_sum([1,2,3,4,5], 9)); // [1,3]

