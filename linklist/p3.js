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

  reverse_between(m,n) {

  }
}

let linkList = new LinkedList("apple");

linkList.append("banana");
linkList.append("catfruit");
linkList.append("dalim");
linkList.append("brokly");
linkList.append("brokly2");

// linkList.print_list();

linkList.reverse_between(2,5);