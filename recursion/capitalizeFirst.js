/**
 * Capitalize array first char
 */

function capitalizeFirst (array) {
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        newArr.push(array[index][0].toUpperCase() + array[index].slice(1, array[index].length));
    }

    return newArr;
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  