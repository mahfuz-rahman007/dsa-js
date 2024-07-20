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

  pop() {
    if (this.head === null) return false;
    if (this.length === 1) {
      let node = this.head
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }

    let temp = this.head;

    for (let i = 1; i < this.length - 1; i++) {
      temp = temp.next;
    }

    let node = temp.next;
    temp.next = null;
    this.tail = temp;
    this.length--;

    return node;
  }

  prepend(value) {
    let new_node = new Node(value);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
      this.length++;
      return true;
    }

    new_node.next = this.head;
    this.head = new_node;
    this.length++;
    return true;
  }

  pop_first() {
    if (this.length === 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp.next;
    }
    this.length--;
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.prepend(value);

    let new_node = new Node(value);

    let prev = this.get(index - 1);

    new_node.next = prev.next;
    prev.next = new_node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.pop_first();
    if (index === this.length) return this.pop();

    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = temp.next;
    this.length--;
    return true;
  }

  reverse() {
    if (this.length === 0) return false;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let after = temp.next;
    let before = null;

    for (let i = 0; i < this.length; i++) {
      after = temp.next;
      temp.next = before;
      before = temp;
      temp = after;
    }
    return true;
  }
}

let linkList = new LinkedList("apple");

linkList.append("banana");
linkList.append("catfruit");
linkList.append("dalim");
linkList.append("brokly");

linkList.pop();
linkList.pop();

linkList.prepend("6");
linkList.pop_first();

linkList.set(2, "7");

linkList.insert(1, "8");

linkList.remove(0);

linkList.print_list();

linkList.reverse();

linkList.print_list();

// print_list
// append
// pop
// prepend
// pop_first
// get
// set
// insert
// remove
// reverse
