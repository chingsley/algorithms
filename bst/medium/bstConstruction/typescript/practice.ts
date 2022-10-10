



{
  {
    class BST {
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
  }

  {
    class BST {
      value: number;
      left: BST | null;
      right: BST | null;

      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

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
        return this;
      }

      insertByRecursion(value: number) {
        let currentNode: BST | null = this;
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

      contains(value: number): boolean {
        if (value < this.value) {
          if (this.left === null) return false;
          return this.left.contains(value);
        } else if (value > this.value) {
          if (this.right === null) return false;
          return this.right.contains(value);
        } else {
          return true;
        }
      }

      containsByRecursion(value: number): boolean {
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

      remove(value: number, parentNode: BST | null = null) {
        let currentNode: BST | null = this;

        while (currentNode !== null) {
          if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else {
            // found it! Now perform Delete! and break at the end;
            if (currentNode.left !== null && currentNode.right !== null) {
              const smallestValueInRightSubtree = currentNode.right.getMin();
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
                // the root node has no child nodes. i.e the tree has only one node.
                // if I remove it, the tree will become non-existent
              }
            } else if (currentNode === parentNode.left) {
              parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
            } else if (currentNode === parentNode.right) {
              parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
            }

            break;
          }
        }
        return this;
      }

      getMin(): number {
        if (this.left === null) return this.value;
        return this.left.getMin();
      }

      getMinByRecursion() {
        let currentNode: BST | null = this;
        while (currentNode.left !== null) {
          currentNode = currentNode.left;
        }
        return currentNode.value;
      }
    }
  }
  {
    class BST {
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
      searchByIteration(value: number) {
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
  }
  {
    class BST {
      value: number;
      left: BST | null;
      right: BST | null;

      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

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

      // // insert() by recursion
      // // O(log(n)) time | O(d) space;
      // insert(value: number) {
      //   if(value < this.value) {
      //     if(this.left === null) {
      //       this.left = new BST(value);
      //     } else {
      //        this.left.insert(value);
      //     }
      //   } else {
      //     if(this.right === null) {
      //       this.right = new BST(value);
      //     } else {
      //        this.right.insert(value);
      //     }
      //   }
      // } 

      // O(log(n)) time | O(1) space
      // n = no. of nodes in the tree
      contains(value: number): boolean {
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

      // // contains() by recrusion
      // // O(log(n)) time | O(d) space
      // // n = no. of nodes in the tree
      // contains(value: number): boolean {
      //   if(this.value === value) return true;

      //   if(value < this.value) {
      //     if(this.left === null) return false;
      //     return this.left.contains(value);
      //   } else {
      //     if(this.right === null) return false;
      //     return this.right.contains(value);
      //   }
      // }

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
            // handle removal;
            if (currentNode.left !== null && currentNode.right !== null) {
              const smallestValueInRight = currentNode.right!.getMin();
              currentNode.value = smallestValueInRight;
              currentNode.right.remove(smallestValueInRight, currentNode);
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
                // do nothing
              }
            } else if (currentNode === parentNode.left) {
              parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
            } else if (currentNode === parentNode.right) {
              parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
            }
            break;

          }
        }
        return this;
      }

      // O(log(n)) time | O(d) space
      getMin() {
        let currentNode: BST = this as BST;
        while (currentNode.left !== null) {
          currentNode = currentNode.left;
        }

        return currentNode.value;
      }

      // // getMin() by recursion
      // // O(log(n)) time | O(d) space
      // getMin(): number {
      //   if(this.left === null) return this.value;
      //   return this.left.getMin();
      // }
    }
  }
  {
    class BST {
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
      searchByIteration(value: number) {
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
  }
  {
    class BST {
      value: number;
      left: BST | null;
      right: BST | null;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      // O(log(n)) time | O(1) space
      insert(value: number) {
        let node: BST | null = this;
        while (true) {
          if (value < node.value) {
            if (node.left === null) {
              node.left = new BST(value);
              break;
            } else {
              node = node.left;
            }
          } else {
            if (node.right === null) {
              node.right = new BST(value);
              break;
            } else {
              node = node.right;
            }
          }
        }

        return this;
      }

      // O(log(n)) time | O(1) space
      contains(value: number): boolean {
        let node: BST | null = this;
        while (node !== null) {
          if (node.value === value) {
            return true;
          } else if (value < node.value) {
            node = node.left;
          } else {
            node = node.right;
          }
        }
        return false;
      }

      // O(log(n)) time | O(1) space
      remove(value: number, parentNode: BST | null = null): BST {
        let node: BST | null = this;
        while (node !== null) {
          if (value < node.value) {
            parentNode = node;
            node = node.left;
          } else if (value > node.value) {
            parentNode = node;
            node = node.right;
          } else {
            if (node.left !== null && node.right !== null) {
              const rightMinVal = this.getMinValInSub(node.right);
              node.value = rightMinVal;
              node.right.remove(rightMinVal, node);
            } else if (parentNode === null) {
              if (node.left !== null) {
                node.value = node.left.value;
                node.right = node.left.right;
                node.left = node.left.left;
              } else if (node.right !== null) {
                node.value = node.right.value;
                node.left = node.right.left;
                node.right = node.right.right;
              } else {
                // do nothing (based on suggestion by iterviewer)
              }
            } else if (node === parentNode.left) {
              parentNode.left = node.left !== null ? node.left : node.right;
            } else if (node === parentNode.right) {
              parentNode.right = node.left !== null ? node.left : node.right;
            }

            break;
          }
        }
        return this;
      }

      getMinValInSub(node: BST) {
        while (node.left !== null) node = node.left;
        return node.value;
      }

    }
  }
}

