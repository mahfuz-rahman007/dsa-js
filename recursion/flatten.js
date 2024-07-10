/**
 * Write a Recursive function that take a  array and flatten it
 */
function flatten(array) {
  let newArr = [];

  for (let index = 0; index < array.length; index++) {

    if (Array.isArray(array[index])) {
        newArr = newArr.concat(flatten(array[index]));
    } else {
      newArr.push(array[index]);
    }

  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
