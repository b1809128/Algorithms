class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size = () => this.length;

  head = () => this.head;

  add = (element) => {
    let node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    this.length++;
  };

  remove = (element) => {
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }
    this.length--;
  };

  empty = () => this.length === 0;

  indexOf = (element) => {
    let currentNode = this.head;
    let idx = -1;
    while (currentNode) {
      idx++;
      if (currentNode.element === element) {
        return idx;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  elementAt = (number) => {
    let currentNode = this.head;
    let count = 0;
    while (count < number) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  addAt = (idx, element) => {
    let currentNode = this.head;
    let node = new Node(element);
    let listIndex = 0;
    let previousNode;
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) {
      currentNode.element = element;
      this.head = node;
    } else {
      while (listIndex < idx) {
        listIndex++;
        previousNode = currentNode;
        // console.log(previousNode);
        currentNode = currentNode.next;
        // console.log(currentNode);
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  };

  printList = () => {
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      console.log(previousNode.element);
    }
  };
}

let list = new LinkedList();

list.add("AngularJS");
list.add("TypeScript");
list.add("NodeJS");
list.add("ReactJS");
list.printList();
console.log("-------------------");
// list.remove("QuocHuy");
// list.printList();
// console.log(list.empty());
// console.log(list.indexOf("ThaoAnh"));
// console.log(list.elementAt(2));
list.addAt(1, "test");
console.log("-------------------");
list.printList();
// let nd = new Node()
// console.log(nd);
