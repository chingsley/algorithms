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

{
  {
    // O(n) time | O(n) space
    function inOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      inOrderTraverse(tree.left, array);
      array.push(tree.value);
      inOrderTraverse(tree.right, array);

      return array;
    }

    // O(n) time | O(n) space
    function preOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      array.push(tree.value);
      preOrderTraverse(tree.left, array);
      preOrderTraverse(tree.right, array);

      return array;
    }

    // O(n) time | O(n) space
    function postOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      postOrderTraverse(tree.left, array);
      postOrderTraverse(tree.right, array);
      array.push(tree.value);

      return array;
    }
  }
  {

    // push, go left, go right
    // O(n) time | O(n) space
    function preOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      array.push(tree.value);
      preOrderTraverse(tree.left, array);
      preOrderTraverse(tree.right, array);

      return array;
    }


    // go left, push, go right
    // O(n) time | O(n) space
    function inOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      inOrderTraverse(tree.left, array);
      array.push(tree.value);
      inOrderTraverse(tree.right, array);

      return array;
    }


    // go left, go right, push
    // O(n) time | O(n) space
    function postOrderTraverse(tree: BST | null, array: number[]) {
      if (tree === null) return array;

      postOrderTraverse(tree.left, array);
      postOrderTraverse(tree.right, array);
      array.push(tree.value);

      return array;
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