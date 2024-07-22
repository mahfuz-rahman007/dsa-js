function selection_sort(array) {
    for (let i = 0; i < array.length; i++) {
        let min_val = i;

        for (let j = i+1; j < array.length; j++) {
            if(array[j] < array[min_val]) {
                min_val = j;
            }
        }
        
        if(min_val !== i) {
            let temp = array[i]; 
            array[i] = array[min_val]
            array[min_val] = temp;
        }
    }
    return array;
}


console.log(selection_sort([3,5,2,8,5,9,1])); // [1,2,3,5,5,8,9]