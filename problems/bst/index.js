// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor (data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }

  // recursive approach
  insert (value) {     

    if (this.data > value && this.left) {
      this.left.insert(value);
    } else if (value < this.data) {
      this.left = new Node(value);
    } else if (value > this.data && this.right) {
      this.right.insert(value);
    } else if (value > this.data) {
      this.right = new Node(value);
    }

  };

  contains (value) {

    if (value === this.data) return this;

    if (this.data < value && this.right) {
      return this.right.contains(value);
    } else if (this.data > value && this.left) {
      return this.left.contains(value);
    }
    return null;
  }


};

module.exports = Node;
