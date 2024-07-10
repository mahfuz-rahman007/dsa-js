/**
 * A recursion function to return true if any value from the array return true from the callback or false;
 */
function someRecursive(array, callback){
    if(array.length == 0) return false;
    return  callback(array[0]) ? true : someRecursive(array.slice(1), callback);    
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false