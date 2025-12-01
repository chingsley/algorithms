// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  insert(value: number): BST {
    let currentNode: BST = this;
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
    return this;
  }

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  contains(value: number) {
    let currentNode: BST | null = this;
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

  // Average: O(log(n)) time, O(1) space
  // Worst: O(n) time, O(1) space
  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // ie. value === currentNode.value => so to remove currentNode:

        // *case 1, if the node to be removed has both left and right child nodes
        // ............ this may or may not be the root node
        if (currentNode.left !== null && currentNode.right !== null) {
          // get the smallest value in the right subtree
          const smallestValue = currentNode.right.getMinValue();
          // set currentNode.value to the smallest value in the right subtree
          currentNode.value = smallestValue;
          // delete the node with smallest value in the right subtree
          currentNode.right.remove(smallestValue, currentNode);

        } else if (parentNode === null) {
          // *case 2: node to delete is the root node, which has one or zero child nodes

          if (currentNode.left !== null) {
            // *case 2a: if the root node has only a left child, but no right child
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            // *case 2a: if the root node has only a right child, but no left child
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // *case 2c: root node has no left or right node
            // if we set currentNode = null, then the entire BST is now null
            // anohter option is to do nothing. Clarify this with your interviewer
          }
        } else if (parentNode.left === currentNode) {
          // *case 3: node to remove is not root node, is the left child of it's parent, has only one of left or right child nodes, or no child nodes
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          // *case 3: node to remove is not root node, is the right child of it's parent, has only one of left or right child nodes, or no child nodes
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
        }

        // ** break aftter removing the node:
        break;
      }
    }

    return this;
  }

  getMinValue() {
    let currentNode: BST = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}