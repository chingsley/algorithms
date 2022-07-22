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
    }

    // O(n) time (n = no. of nodes in the tree)
    // O(max(k, n)) ()
    function findKthLargestValueInBst(tree: BST | null, k: number) {
      const array: number[] = [];
      reverseInOrderTraversal(tree, array, k);
      console.log(array);
      return array[k - 1];
    }

    function reverseInOrderTraversal(tree: BST | null, array: number[], k: number) {
      if (tree === null || array.length >= k) return;

      reverseInOrderTraversal(tree.right, array, k);
      if (array.length < k) {
        array.push(tree.value);
        reverseInOrderTraversal(tree.left, array, k);
      }
    }
  }
}