/**
 * Find The Min sub array Length Which sum is greater or equal to the number
 */

function minSubArrayLen(array, number){

    let total = 0;
    let start = 0;
    let end = 0;
    let length = Infinity;

    while(start < array.length) {

        if(total < number && end < array.length) {
            total+=array[end];
            end++;
        } else if(total >= number) {
            length = Math.min(length, end-start);
            total-= array[start];
            start++;
        } else {
            break;
        }
    }

    return length === Infinity ? 0:length;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0