import { BinaryTree, root } from '../../BinaryTree';

/**
 * Question: Return True if tree inclues value, else return false
 * 
 * Time: O(n) (n = no. of nodes in the tree)
 * Space: (d) (due to recursive calls; d = depth or height of the tree)
 * @param root BinaryTree
 * @param value number
 * @returns bolean
 */
function treeIncludes(root: BinaryTree, value: number) {
  if (root === null) return false;

  if (root.value === value) return true;

  const foundInLeft = treeIncludes(root.left, value);
  const foundInRight = treeIncludes(root.right, value);
  return foundInLeft || foundInRight;
}


console.log(treeIncludes(root, 10));
console.log(treeIncludes(root, 123));