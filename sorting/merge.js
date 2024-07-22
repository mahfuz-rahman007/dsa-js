
class MergeShort {

    /**
     * Merge two sorted array and time complexity is O(n)
     */
    merge(array1, array2) {

        let combine = [];
        let i = 0, j = 0;

        while (i < array1.length && j < array2.length) {
            if(array1[i] < array2[j]) {
                combine.push(array1[i]);
                i++;
            } else {
                combine.push(array2[j]);
                j++;
            }
        }
        
        while (i < array1.length) {
            combine.push(array1[i]);
            i++;
        }

        while (j < array2.length) {
            combine.push(array2[j]);
            j++;
        }

        return combine;
    }

    /**
     * Merge Sort Implement Complexity O(log n) + O(n) or merge
     */
    merge_sort(array) {
        if(array.length === 1) return array;

        let middle = parseInt((array.length/2));

        let left_array = this.merge_sort(array.slice(0, middle));
        let right_array = this.merge_sort(array.slice(middle, array.length));

        return this.merge(left_array, right_array);
    }
}


let merge = new MergeShort();

let original_array = [9,3,7,4,6,2,8,1];

let sorted_array = merge.merge_sort(original_array);

console.log(original_array, sorted_array);
