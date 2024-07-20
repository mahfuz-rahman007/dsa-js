class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

    if(this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
      this.length = 1;
      return true;
    }

    this.tail.next = new_node;
    new_node.prev = this.tail;
    this.tail = new_node;
    this.length++;

    return true;
  }

  pop() {
    if(this.length === 0) return false;

    let temp = this.tail;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;

    return temp.value;
  }

  prepend(value) {
    let new_node = new Node(value);
    if(this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head.prev = new_node;
      this.head = new_node;
    }
    this.length++;
    return true;
  }

  pop_first() {
    if(this.length === 0) return false;
    
    let temp = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp.value;
  }

  get(index) {
    if(index < 0 || index >= this.length) return false;

    let temp = this.head;
    if(index < this.length/2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }

    } else {
      temp = this.tail;
      for (let i = this.length-1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    let node = this.get(index);

    if(node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {

    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.prepend(value);
    if(index === this.length) return this.append(value);

    let new_node = new Node(value);

    let prevIndexNode = this.get(index-1);

    let indexNode = prevIndexNode.next;

    prevIndexNode.next = new_node;
    new_node.prev = prevIndexNode;
    new_node.next = indexNode;
    indexNode.prev = new_node;
    this.length++;

    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return this.pop_first();
    if(index === this.length-1) return this.pop();

    let beforeNode = this.get(index-1);
    let indexNode = beforeNode.next;

    beforeNode.next = indexNode.next;
    indexNode.next.prev = beforeNode;
    indexNode.next  = null;
    indexNode.prepend = null;
    
    this.length--;
    return true;
  }

}

let dLinkList = new DoublyLinkedList("Apple");

dLinkList.append('Banana');
dLinkList.append('Biskits');
dLinkList.append('Orange');

// console.log("pop : ", dLinkList.pop());

// dLinkList.prepend("Cake");

// console.log("POP first : ", dLinkList.pop_first());

// console.log(dLinkList.get(3));

// dLinkList.set(3, "Juice");

// dLinkList.insert(1, "Mutton");

dLinkList.remove(2);

dLinkList.print_list();

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
