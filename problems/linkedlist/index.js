// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor (data, next=null) {
    this.data = data;
    this.next = next;
  }
};

class LinkedList {
  constructor () {
    this.head = null;
  };

  insertFirst (value) {
    this.head = new Node(value, this.head);
  };

  // counting the size of the linked list
  size () {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  };

  // get the first element in the linkedlist
  getFirst () {
    return this.head;
  };

  // getting the last element from the linkedlist
  getLast () {
    let node = this.head;
    
    while(node) {  
      if(!node.next) return node;
      node = node.next;
    };
    return node;
  };

  // clear out the list
  clear () {
    this.head = null;
  }

  // removing the first node
  removeFirst () {
    if(!this.head) return;
    this.head = this.head.next;
  };

  // remove the last element
  removeLast () {

    // if the list is empty
    if(!this.head) return;

    // if the list has only ONE element
    if (!this.head.next) {
      this.head = null;
      return;
    };

    // if the list has more than one element
    let prevNode = this.head;
    let currNode = this.head.next;

    while(currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = null;
  };

  insertLast (value) {
    const last = this.getLast();

    if (last) {
      // list is not empty
      last.next = new Node(value);
    } else {
      // list is empty
      this.head = new Node(value);
    }
  };

  // grab an element at a certain index from the list
  getAt (index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  };

  removeAt () {
    
  }

};

module.exports = { Node, LinkedList };

