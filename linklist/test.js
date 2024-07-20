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

  printList() {
    if (this.length === 0) {
      console.log("Empty List");
    } else {
      let temp = this.head;
      while (temp !== null) {
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
    let temp = this.head;

    if (this.head === null) {
      return "The Linked List Empty";
    }

    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node.value;
    }

    for (let i = 1; i <= this.length - 2; i++) {
      temp = temp.next;
    }

    let node = temp.next;
    temp.next = null;
    this.tail = temp;
    this.length--;

    return node.value;
  }

  prepend(value) {
    let new_node = new Node(value);

    if (this.head === null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }

    this.length++;

    return true;
  }

  popFirst() {
    if (this.head === null) {
      return false;
    }

    let value = this.head;
    this.head = this.head.next;

    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    value.next = null;
    return value;
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
    if (index === this.length) return this.append(value);

    let new_node = new Node(value);
    let temp = this.get(index - 1);

    new_node.next = temp.next;
    temp.next = new_node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.popFirst();

    let prev = this.get(index - 1);
    let removeNode = prev.next;

    prev.next = removeNode.next;
    removeNode.next = null;
    this.length--;
    return true;
  }

  reverse() {
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

let hello1 = new LinkedList("Mahfuz");

hello1.append("Hasan");

hello1.append("Rakib");

// console.log("pop : " , hello1.pop());

hello1.prepend("Munna");

hello1.prepend("Pranto");

// console.log("Pop first : " , hello1.popFirst());

hello1.append("Tanvir");

// console.log('Update Tanvir : ', hello1.set(2, 'Cyber Bro'));

// console.log('Insert After Mahfuz : ', hello1.insert(2, 'RAB'));

// console.log(hello1.remove(3));

// hello1.printList();

console.log(hello1.reverse());

hello1.printList();
