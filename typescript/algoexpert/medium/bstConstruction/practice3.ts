export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }


  // O(log(n)) time (Average balanced tree)
  // O(n) time (worst case - a one-branch tree)
  // O(d) space (d = depth of the tree)
  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  // O(log(n)) time (Average balanced tree)
  // O(n) time (worst case - a one-branch tree)
  // O(1) space
  insertByIteration(value: number) {
    let currentNode: BST = this;
    let inserted = false;
    while (!inserted) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          inserted = true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          inserted = true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  // O(log(n)) time (Average balanced tree)
  // O(n) time (worst case - a one-branch tree)
  // O(d) space (d = depth of the tree)
  contains(value: number): boolean {
    if (this.value === value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) return false;
      return this.left.contains(value);
    } else {
      if (this.right === null) return false;
      return this.right.contains(value);
    }
  }

  // O(log(n)) time (Average balanced tree)
  // O(n) time (worst case - a one-branch tree)
  // O(1) space
  searchByIteration(value: number): boolean {
    let currentNode: BST | null = this;
    let found = false;
    while (currentNode !== null && !found) {
      if (currentNode.value === value) {
        found = true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return found;
  }


  // O(log(n)) time (Average balanced tree)
  // O(n) time (worst case - a one-branch tree)
  // O(1) space
  remove(value: number, parentNode: BST | null = null) {
    let currentNode: BST | null = this;
    let removed: boolean = false;

    while (currentNode !== null && !removed) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // case 1: nodeToRemove has both left and right child:
        if (currentNode.left !== null && currentNode.right !== null) {
          const smallestValueInRightSubtree = currentNode.right.getMinValue();
          currentNode.value = smallestValueInRightSubtree;
          currentNode.right.remove(smallestValueInRightSubtree, currentNode);
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // do nothing ?
          }
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
        } else if (currentNode === parentNode.right) {
          parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
        }

        removed = true;
      }
    }

    return this;
  }

  // O(log(n)) time (avg case)
  // O(n) time (worst case)
  // O(d) space
  getMinValue(): number {
    if (this.left === null) return this.value;
    return this.left.getMinValue();
  }

  // O(log(n)) time (avg case)
  // O(n) time (worst case)
  // O(1) space
  getMinValueByIteration() {
    let currentNode: BST = this;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}



{
  {
    // class BST {
    //   value: number;
    //   left: BST | null;
    //   right: BST | null;

    //   constructor(value: number) {
    //     this.value = value;
    //     this.left = null;
    //     this.right = null;
    //   }

    //   insert(value: number) {
    //     if (value < this.value) {
    //       if (this.left === null) {
    //         this.left = new BST(value);
    //       } else {
    //         this.left.insert(value);
    //       }
    //     } else {
    //       if (this.right === null) {
    //         this.right = new BST(value);
    //       } else {
    //         this.right.insert(value);
    //       }
    //     }
    //     return this;
    //   }

    //   insertByRecursion(value: number) {
    //     let currentNode: BST | null = this;
    //     while (true) {
    //       if (value < currentNode.value) {
    //         if (currentNode.left === null) {
    //           currentNode.left = new BST(value);
    //           break;
    //         } else {
    //           currentNode = currentNode.left;
    //         }
    //       } else {
    //         if (currentNode.right === null) {
    //           currentNode.right = new BST(value);
    //           break;
    //         } else {
    //           currentNode = currentNode.right;
    //         }
    //       }
    //     }
    //     return this;
    //   }

    //   contains(value: number): boolean {
    //     if (value < this.value) {
    //       if (this.left === null) return false;
    //       return this.left.contains(value);
    //     } else if (value > this.value) {
    //       if (this.right === null) return false;
    //       return this.right.contains(value);
    //     } else {
    //       return true;
    //     }
    //   }

    //   containsByRecursion(value: number): boolean {
    //     let currentNode: BST | null = this;
    //     while (currentNode !== null) {
    //       if (value < currentNode.value) {
    //         currentNode = currentNode.left;
    //       } else if (value > currentNode.value) {
    //         currentNode = currentNode.right;
    //       } else {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }

    //   remove(value: number, parentNode: BST | null = null) {
    //     let currentNode: BST | null = this;

    //     while (currentNode !== null) {
    //       if (value < currentNode.value) {
    //         parentNode = currentNode;
    //         currentNode = currentNode.left;
    //       } else if (value > currentNode.value) {
    //         parentNode = currentNode;
    //         currentNode = currentNode.right;
    //       } else {
    //         // found it! Now perform Delete! and break at the end;
    //         if (currentNode.left !== null && currentNode.right !== null) {
    //           const smallestValueInRightSubtree = currentNode.right.getMin();
    //           currentNode.value = smallestValueInRightSubtree;
    //           currentNode.right.remove(smallestValueInRightSubtree, currentNode);
    //         } else if (parentNode === null) {
    //           if (currentNode.left !== null) {
    //             currentNode.value = currentNode.left.value;
    //             currentNode.right = currentNode.left.right;
    //             currentNode.left = currentNode.left.left;
    //           } else if (currentNode.right !== null) {
    //             currentNode.value = currentNode.right.value;
    //             currentNode.left = currentNode.right.left;
    //             currentNode.right = currentNode.right.right;
    //           } else {
    //             // the root node has no child nodes. i.e the tree has only one node.
    //             // if I remove it, the tree will become non-existent
    //           }
    //         } else if (currentNode === parentNode.left) {
    //           parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
    //         } else if (currentNode === parentNode.right) {
    //           parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
    //         }

    //         break;
    //       }
    //     }
    //     return this;
    //   }

    //   getMin(): number {
    //     if (this.left === null) return this.value;
    //     return this.left.getMin();
    //   }

    //   getMinByRecursion() {
    //     let currentNode: BST | null = this;
    //     while (currentNode.left !== null) {
    //       currentNode = currentNode.left;
    //     }
    //     return currentNode.value;
    //   }
    // }


  }
}

