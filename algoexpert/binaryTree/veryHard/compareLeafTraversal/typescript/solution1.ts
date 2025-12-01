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
  const arr1 = traverse(tree1);
  const arr2 = traverse(tree2);
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function traverse(tree: BinaryTree) {
  const arr: number[] = [];
  const stack: BinaryTree[] = [tree];
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!node.left && !node.right) {
      arr.push(node.value);
    }

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return arr;
}
