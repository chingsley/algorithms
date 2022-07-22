/**
 * In this solution, the 'remove()' function is buggy.
 * I haven't found the bug yet.
 */

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
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

  remove(value: number, parentNode: BST | null) {
    let currentNode: BST | null = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // handle delete
        if (currentNode.left !== null && currentNode.right !== null) {
          const smallestValueInRightSubtree = currentNode.right.getMinValue();
          currentNode.value = smallestValueInRightSubtree;
          currentNode.right.remove(smallestValueInRightSubtree, currentNode);
        } else if (parentNode === null) { // case 2
          if (currentNode.left !== null) { // case 2a
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) { // case 2b
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else { // case 2c
            // it is a single node tree with the node to delete = the root node.
            // Please discuss withe the interviewer how to handle this case
          }

        } else if (currentNode === parentNode.left) { // case 3
          parentNode.left = currentNode.left ? currentNode.left : currentNode.right;

        } else if (currentNode === parentNode.right) { // case 4
          parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
        }
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


/*
case 1 (remove x. It may or may not be the root node. But it definitely has two child nodes)
                .
                .
                |
                x
              /   \
            2       5


case 2a
                x
              /
            2
          /   \
        1       3


case 2b
        x
          \
            2
          /   \
        1       3


case 2c
          x


case 3
                p
              /
            x
          /
        1

      or
                p
              /
            x
             \
               3


case 4
          p
            \
              x
            /
          1

     or
            x
              \
                2
                 \
                   3

*/
