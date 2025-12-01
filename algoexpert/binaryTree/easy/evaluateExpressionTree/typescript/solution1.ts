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

// O(n) time | O(h) space (n = no. of nodes, h = height of tree)
export function evaluateExpressionTree(tree: BinaryTree): number {
  if (tree.left === null && tree.right === null) {
    return tree.value;
  }

  const leftResult = evaluateExpressionTree(tree.left!);
  const rightResult = evaluateExpressionTree(tree.right!);
  return compute(leftResult, rightResult, tree.value);
}

function compute(val1: number, val2: number, op: number) {
  if (op === -1) {
    return val1 + val2;
  } else if (op === -2) {
    return val1 - val2;
  } else if (op === -3) {
    const result = val1 / val2;
    // round the result towards zero:
    return result > 0 ? Math.floor(result) : Math.ceil(result);
  } else {
    return val1 * val2;
  }
}
