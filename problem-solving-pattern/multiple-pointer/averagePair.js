/**
 * Multiple Pointer Pattern
 *
 * Here use one or more pointer to array or string index and move it as where as like
 */

// Find If there are any pair on the array that their average is same as target
function averagePair(array, target) {
  if (!array.length) return false;

  let start = 0;
  let end = array.length - 1;

  while (start < end) {

    let avg = (array[start] + array[end])/2;

    if ( avg === target ) {
      return true;
    } else if(avg > target) {
        end--;
    } else {
        start++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
