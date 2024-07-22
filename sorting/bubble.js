

function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }   
        }
        
    }

    return array;
}

console.log(bubble_sort([1,3,7,4,5,9,2])); // [1,2,3,4,5,7,9]
console.log(bubble_sort([9,7,5,4,3,2,1,6])); // [1,2,3,4,5,7,9]
