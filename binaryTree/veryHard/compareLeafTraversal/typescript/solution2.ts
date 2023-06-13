// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// O(m + n) time | O(d1 + d2) space
// (m = no. of nodes in tree1, n = no. of nodes in tree2)
// (d1 = depth of tree1, d2 = depth of tree 2)
export function compareLeafTraversal(tree1: BinaryTree, tree2: BinaryTree) {
  const stack1: BinaryTree[] = [tree1];
  const stack2: BinaryTree[] = [tree2];

  let count = 0;
  let currentLeafNodeValue: number | null = null;
  let stack = stack1;
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!node.left && !node.right) {

      if (count % 2 === 0) {
        currentLeafNodeValue = node.value;
        stack = stack2;
      } else {
        if (node.value !== currentLeafNodeValue) return false;
        stack = stack1;
      }

      count += 1;
    } else {
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  return stack1.length === 0 && stack2.length === 0;
}
