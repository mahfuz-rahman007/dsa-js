

class QuickSort {

    swap(my_array, first, second) {
        let temp = my_array[first];
        my_array[first] = my_array[second];
        my_array[second] = temp;
    }

    pivot(my_array, pivot_point, end_index) {
        let swap_point = pivot_point;

        for (let i = pivot_point+1; i < end_index+1; i++) {
            
            if (my_array[i] < my_array[pivot_point]) {
                swap_point++;
                this.swap(my_array, i, swap_point);
            }
        }

        this.swap(my_array, swap_point, pivot_point);

        return swap_point;
    }

    quick_sort_helper(my_array, left, right) {
        
        if(left < right) {
            
            let pivot_index = this.pivot(my_array, left, right);
     
            this.quick_sort_helper(my_array, left, pivot_index-1);
            this.quick_sort_helper(my_array, pivot_index+1, right);
        }

        return my_array;
    }

    quick_sort(my_array) {
        this.quick_sort_helper(my_array, 0, my_array.length-1);
    }

}

let quick = new QuickSort();

let my_array = [4,6,3,2,5,7,1];

quick.quick_sort(my_array);

console.log(my_array);