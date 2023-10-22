// WORK IN PROGRESS

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


export function sumBsts(tree: BinaryTree) {
  // const [_, _, _, _, _, sum] = sumNodes(tree)
  return sumNodes(tree)[5];
}

function sumNodes(node: BinaryTree | null): [boolean, number, number, number, number, number] {
  if (node === null) return [true, Infinity, -Infinity, 0, 0, 0];

  const [isLeftBST, minLeft, maxLeft, countLeftNodes, sumLeft, totalBSTSumLeft] = sumNodes(node.left);
  const [isRightBST, minRight, maxRight, countRightNodes, sumRight, totalBSTSumRight] = sumNodes(node.right);

  const isBST = isLeftBST && isRightBST && isNodeBST(node, maxLeft, minRight);
  const min = Math.min(node.value, minLeft, minRight);
  const max = Math.max(node.value, maxLeft, maxRight);
  const nodeCount = 1 + countLeftNodes + countRightNodes;
  let nodeSums = sumLeft + sumRight + node.value;
  let total = totalBSTSumLeft + totalBSTSumRight;
  if (isBST && nodeCount > 2) {
    total += sumLeft + sumRight + node.value;
    nodeSums = 0;
  }

  return [isBST, min, max, nodeCount, nodeSums, total];
}

function isNodeBST(node: BinaryTree, maxLeft: number | null, minRight: number | null): boolean {
  if (maxLeft && node.value <= maxLeft) return false;
  if (minRight && node.value > minRight) return false;

  return true;
}
