class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      let new_node = new Node(value);
      this.head = new_node;
      this.tail = new_node;
      this.length = 1;
    }
  
    print_list() {
      if (this.length === 0) {
        console.log("Empty List");
      } else {
        let temp = this.head;
        
        for (let i = 0; i < this.length; i++) {
          console.log(temp.value);
          temp = temp.next;
        }
      }
    }
  
    append(value) {
      let new_node = new Node(value);
      if (this.head === null) {
        this.head = new_node;
        this.tail = new_node;
      } else {
        this.tail.next = new_node;
        this.tail = new_node;
      }
      this.length++;
      return true;
    }

    bubble_sort() {
      if(this.length < 2) return false;

        let temp = this.head;

        while(temp.next !== null) {


          let other_temp = this.head;

          while (other_temp.next !== null) {
            if(other_temp.value > other_temp.next.value) {
              let temp2 = other_temp.value;
              other_temp.value = other_temp.next.value; 
              other_temp.next.value = temp2;
            }
            other_temp = other_temp.next;
          }

          temp = temp.next;
        }
    }

    selection_sort() {

      if(this.length < 2) return false;

      let temp = this.head;
      
      while (temp.next)  {

        let inner_temp = temp;
        let min_node = temp;

        while (inner_temp.next !== null) {
          
          if(inner_temp.next.value < min_node.value) {
            min_node = inner_temp.next;
          }

          inner_temp = inner_temp.next;
        }

        if(min_node.value !== temp.value) {
          let temp_value = temp.value;
          temp.value = min_node.value;
          min_node.value = temp_value;
        }

        temp = temp.next;
      }
    }

    insertion_sort() {
      if(this.length < 2) return false;

      let sorted_list_head = this.head;

      let unsorted_list_head = this.head.next;

      sorted_list_head.next = null;

      while(unsorted_list_head !== null) {
        let current = unsorted_list_head;

        unsorted_list_head = unsorted_list_head.next;

        if(current.value < sorted_list_head.value) {
          current.next = sorted_list_head;
          sorted_list_head = current;
        } else {

          let search_pointer = sorted_list_head;

          while (search_pointer.next !== null && current.value > search_pointer.value) {
            search_pointer = search_pointer.next;
          }

          current.next = search_pointer.next;
          search_pointer.next = current;
        }

      }

      this.head = sorted_list_head;
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      this.tail = temp;
    }

    /**
     * Merge Sort Takes a unsorted linkList and merge them is this linkList and by ascending order 
     */
    merge_sort(linkList) {

      let homeList = this.head;
      let outsideList = linkList.head;
      let dummy = new Node(null);
      let current = dummy;

      while (homeList !== null && outsideList !== null) {
        
        if(homeList.value < outsideList.value) {
          current.next = homeList;
          homeList = homeList.next;
        } else {
          current.next = outsideList;
          outsideList = outsideList.next;
        }

        current = current.next;
        
      }

      if(homeList !== null) {
        current.next = homeList;
      } else {
        current.next = outsideList;
        this.tail = linkList.tail;
      }

      this.head = dummy.next;
      this.length += linkList.length;

    }
  
  }
  
let linkList = new LinkedList(3);
  
linkList.append(6);
linkList.append(8);
linkList.append(9);

let linkList2 = new LinkedList(1);
  
linkList2.append(4);
linkList2.append(5);
linkList2.append(7);
  
// linkList.bubble_sort();
// linkList.selection_sort();
// linkList.insertion_sort();

linkList.merge_sort(linkList2);

linkList.print_list();
  