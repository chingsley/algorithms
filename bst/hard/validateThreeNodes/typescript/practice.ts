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
}

export const __ = '__';