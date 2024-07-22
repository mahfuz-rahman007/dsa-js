

function insertion_sort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i-1;
        
        while (temp < array[j] && j > -1) {
            array[j+1] = array[j];
            array[j] = temp;
            j -= 1;
        }
    }
    return array;
}

console.log(insertion_sort([2,7,5,9,4,1,8,6])); // [1,2,4,5,7,8,9]
//                          2,5,7,4,9