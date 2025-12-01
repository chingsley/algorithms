// O(n) time , O(d) space
// d = detph or height of the tree
// n = number of nodes in the tree
// in a balanced binary tree, d = log(n)
// therefore, Space Complexity for the solutin = O(d) = O(logn)
const invertBinaryTree = (tree) => {
  if (!tree) {
    return;
  }

  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
};

function swapLeftAndRight(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}
