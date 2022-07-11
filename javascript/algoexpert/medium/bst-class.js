// WORK IN PROGRESS (THIS SOLUTION IS DOES NOT PASS THE TESTS YET)

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  insert(value) {
    // Write your code here.
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  remove(value, parentNode = null) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // the node to be removed is found

        // case  1, the node to be has both left and right child nodes, and is not root node
        if (currentNode.left !== null && currentNode.right !== null) {
          // set currentNode.value to smallest value for right subtree
          currentNode.value = currentNode.right.getMinValue();
          // remove the smallest value in right subtree
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          // case 2, current node is root node

          if (currentNode.left !== null) {
            // case 2a,?
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // we want to remove a root node that does not have any children nodes
            currentNode.value = null;
          }
        } else if ((parentNode.left === currentNode)) {
          // case 2, ?
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if ((parentNode.right === currentNode)) {
          // case 3, ?
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }

    // Do not edit the return statement of this method.
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;
