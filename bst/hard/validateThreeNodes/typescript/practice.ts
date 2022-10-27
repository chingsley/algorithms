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
}

export const __ = '__';