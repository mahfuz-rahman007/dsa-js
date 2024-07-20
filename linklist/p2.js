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

  find_knt_element(step) {
    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < step; i++) {
      if(fast == null || fast.next == null) return false; 
      fast = fast.next;
    }
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

let linkList = new LinkedList("apple");

linkList.append("banana");
linkList.append("catfruit");
linkList.append("dalim");
linkList.append("brokly");
linkList.append("brokly2");

// linkList.print_list();

console.log(linkList.find_knt_element(3));
