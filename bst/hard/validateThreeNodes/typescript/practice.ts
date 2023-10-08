import { BST } from './solution1';
{
  {
    // O(log(n)) time | O(1) space
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      let ancestor: BST | null = getAncestor(nodeOne, nodeTwo);
      let descendant: BST | null = null;
      if (ancestor !== null) {
        descendant = nodeThree;
      } else {
        ancestor = getAncestor(nodeThree, nodeTwo);
        if (ancestor !== null) descendant = nodeOne;
      }

      if (descendant === null) return false;

      ancestor = getAncestor(nodeTwo, descendant);
      if (ancestor === null) return false;

      return true;
    }

    function getAncestor(parent: BST, child: BST): BST | null {
      let currNode: BST | null = parent;
      while (currNode !== null) {
        if (currNode.value === child.value) {
          return parent;
        } else if (child.value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }

      return null;
    }

    class BST {
      value: number;
      left: BST | null;
      right: BST | null;
      constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }
  }
  {
    // O(h) time | O(1) space
    // h = height of the tree
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      let ancestor: BST | null = null;
      let descendant: BST | null = null;

      ancestor = checkAncestor(nodeOne, nodeTwo);
      if (ancestor !== null) {
        descendant = nodeThree;
      } else {
        ancestor = checkAncestor(nodeThree, nodeTwo);
        if (ancestor !== null) descendant = nodeOne;
      }

      if (descendant === null) return false;

      ancestor = checkAncestor(nodeTwo, descendant);
      if (ancestor === null) return false;

      return true;
    }


    function checkAncestor(ancestor: BST, descendant: BST) {
      let currNode: BST | null = ancestor;
      while (currNode !== null) {
        if (currNode.value === descendant.value) return ancestor;
        if (descendant.value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }

      return null;
    }
  }
  {
    // O(d) time | O(1) space
    // d = depth or height of the tree
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      if (parentToChild(nodeOne, nodeTwo)) {
        return parentToChild(nodeTwo, nodeThree);
      }
      if (parentToChild(nodeThree, nodeTwo)) {
        return parentToChild(nodeTwo, nodeOne);
      }

      return false;
    }

    function parentToChild(parent: BST, child: BST): boolean {
      let currNode: BST | null = parent;
      while (currNode !== null) {
        if (currNode.value === child.value) return true;

        if (child.value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }

      return false;
    }
  }
  {
    // O(h) time | O(1) space
    // h = height of the tree
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      if (parentToChild(nodeOne, nodeTwo)) {
        return parentToChild(nodeTwo, nodeThree);
      }
      if (parentToChild(nodeThree, nodeTwo)) {
        return parentToChild(nodeTwo, nodeOne);
      }

      return false;
    }

    function parentToChild(parent: BST, child: BST): boolean {
      let currNode: BST | null = parent;
      while (currNode !== null) {
        if (child.value === currNode.value) return true;

        if (child.value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }
      return false;
    }
  }
  {
    // O(d) time | O(1) space
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      if (parentToChild(nodeOne, nodeTwo)) return parentToChild(nodeTwo, nodeThree);
      if (parentToChild(nodeThree, nodeTwo)) return parentToChild(nodeTwo, nodeOne);
      return false;
    }

    function parentToChild(parent: BST, child: BST): boolean {
      let currNode: BST | null = parent;
      while (currNode !== null) {
        if (child.value === currNode.value) return true;
        currNode = child.value < currNode.value ? currNode.left : currNode.right;
      }

      return false;
    }
  }
  {
    // O(h) time | O(1) space;
    // h = height of the three
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      if (parentToChild(nodeOne, nodeTwo)) return parentToChild(nodeTwo, nodeThree);
      if (parentToChild(nodeThree, nodeTwo)) return parentToChild(nodeTwo, nodeOne);

      return false;
    }

    function parentToChild(parent: BST, child: BST): boolean {
      let currNode: BST | null = parent;
      while (currNode !== null) {
        if (child.value === currNode.value) return true;
        if (child.value < currNode.value) {
          currNode = currNode.left;
        } else {
          currNode = currNode.right;
        }
      }

      return false;
    }

  }
  {
    // O(log(n) time) | O(1) space
    // OR O(d) time | O(1) space
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];

      if (findDec(n2, n3)) return findDec(n1, n2);
      if (findDec(n2, n1)) return findDec(n3, n2);

      return false;
    }

    function findDec(n1: BST, n2: BST): boolean {
      let currNode: BST | null = n1;
      while (currNode) {
        if (currNode.value === n2.value) return true;
        currNode = n2.value > currNode.value ? currNode.right : currNode.left;
      }

      return false;
    }
  }
  {

    // O(log(n) time) | O(1) space
    // OR O(d) time | O(1) space
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];

      if (findDec(n1, n2, n3)) return true;
      return findDec(n3, n2, n1);
    }

    function findDec(n1: BST, n2: BST, n3: BST): boolean {
      let currNode: BST | null = n1;
      let nodeToFind = n2;
      let res: boolean[] = [];
      while (currNode) {
        if (currNode.value === nodeToFind.value) {
          res.push(true);
          if (res.length === 2) {
            return true;
          } else {
            nodeToFind = n3;
          }
        };
        currNode = nodeToFind.value > currNode.value ? currNode.right : currNode.left;
      }

      return false;
    }
  }
  {
    // O(log(n) time) | O(1) space
    // OR O(d) time | O(1) space
    function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
      const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];

      if (findDecs(n1, n2, n3)) return true;
      return findDecs(n3, n2, n1);
    }

    function findDecs(n1: BST, n2: BST, n3: BST): boolean {
      let currNode: BST | null = n1;
      let nodeToFind = n2;
      let found = false;
      while (currNode) {
        if (currNode.value === nodeToFind.value) {
          if (found) return true;
          found = true;
          nodeToFind = n3;
        };
        currNode = nodeToFind.value > currNode.value ? currNode.right : currNode.left;
      }

      return false;
    }

  }
}

export const __ = '__';