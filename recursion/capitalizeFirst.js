/**
 * Capitalize array first char
 */

function capitalizeFirst (array) {

    if(array.length === 1){
        return [array[0][0].toUpperCase() + array[0].slice(1, array[0].length)];
    }

    let res = capitalizeFirst(array.slice(1));

    let string = array[0][0].toUpperCase() + array[0].slice(1, array[0].length);

    res.push(string);

    return res;
}
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  