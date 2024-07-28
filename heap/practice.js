/**
 * Heap is A Tree Like Data structure. But with max value top and descendants will be less then(Max Heap, also can be Min Heap).
 * We will use Array Structure to Create a Heap
 */

class Heaps{

    #heap = [];

    get_heap() {
        return [...this.#heap];
    }

    #left_index(index) {
        return 2*index + 1;
    }

    #right_index(index) {
        return 2*index + 2;
    }

    #parent(index) {
        return Math.floor((index-1)/2); 
     }

    #swap_value(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    insert(value){

        this.#heap.push(value);
        
        if(this.#heap.length === 1) return true;

        let value_index = this.#heap.length - 1;
        let parent_index = this.#parent(value_index);

        while (this.#heap[parent_index] < value) {
            this.#swap_value(parent_index, value_index);
            value_index = parent_index;
            parent_index = this.#parent(parent_index);
        }

        return true;
    }

    #sink_down(index) {

        let max_index = index;
        let size = this.#heap.length;

        while (true) {

            let left_index = this.#left_index(index);
            let right_index = this.#right_index(index);

            if(left_index < size && this.#heap[left_index] > this.#heap[max_index]) {
                max_index = left_index;
            }
            
            if(right_index < size && this.#heap[right_index] > this.#heap[max_index]) {
                max_index = right_index;
            }

            if(max_index !== index) {
                this.#swap_value(index, max_index);
                index = max_index;
            } else {
                return;
            }
        }

    }

    /**
     * In Heap we always remove the top element
     */
    remove() {

        if(this.#heap.length === 0) return null;

        if(this.#heap.length === 1) return this.#heap.pop();

        let maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sink_down(0);
        return maxValue;
    }

}

let heap = new Heaps();

heap.insert(100);
heap.insert(77);
heap.insert(97);
heap.insert(67);

heap.insert(87);
heap.insert(110);
heap.insert(200);

console.log(heap.get_heap());

heap.remove();

console.log(heap.get_heap());