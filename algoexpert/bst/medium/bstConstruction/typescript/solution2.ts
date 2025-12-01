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

  insert(value: number): BST {
    this.insertByRecursion(value);
    return this;
  }

  contains(value: number) {
    return this.searchByRecursion(value);
  }

  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this;
    let isRemoved: boolean = false;
    while (currentNode !== null && isRemoved === false) {

      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // found the value. Now we remove.
        if (currentNode.left !== null && currentNode.right !== null) {
          const smallestVal = currentNode.right.getMinValue();
          currentNode.value = smallestVal;
          currentNode.right.remove(smallestVal, currentNode);
        } else if (parentNode === null) { // i.e node2delete  (currNode) is the root node (b/c it has no parent)
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // Do nothing?
          }
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
        } else if (currentNode === parentNode.right) {
          parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
        }

        // set isRemoved to true to break the loop;
        isRemoved = true;
      }


    }

    // Do not edit the return statement of this method.
    return this;
  }

  getMinValue(): number {
    return this.getMinValueByIteration();
  }

  getMinValueByRecursion(): number {
    if (this.left === null) return this.value;
    return this.left.getMinValueByRecursion();
  }

  getMinValueByIteration(): number {
    let currentNode: BST = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // O(n) time (worst case) | O(log(n)) time (average case
  // worst case is when we have a one-sided tree (all left, or all right)
  // average case is when we have a balanced tree (half of the nodes on the left, and half on the right)
  // O(d) space (d = depth/height of the tree)
  insertByRecursion(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insertByRecursion(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insertByRecursion(value);
      }
    }
  }

  // O(n) time (worst case) | O(log(n)) time (average case)
  // worst case is when we have a one-sided tree (all left, or all right)
  // average case is when we have a balanced tree (half of the nodes on the left, and half on the right)
  // O(1) space
  insertByIteration(value: number) {
    let currentNode: BST = this;
    let isInserted: boolean = false;
    while (!isInserted) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          isInserted = true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          isInserted = true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  // O(log(n)) time (average case) | O(n) time worst case
  // O(d) space; (d = depth or height of the tree)
  searchByRecursion(value: number): boolean {
    if (this.value === value) return true;
    if (value < this.value) {
      return this.left ? this.left.searchByRecursion(value) : false;
    } else {
      return this.right ? this.right.searchByRecursion(value) : false;
    }
  }

  // O(log(n)) time (average case) | O(n) time worst case
  // O(1) space;
  searchByIteration(value: number): boolean {
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
}
