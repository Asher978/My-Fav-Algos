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


};

module.exports = { Node, LinkedList };

