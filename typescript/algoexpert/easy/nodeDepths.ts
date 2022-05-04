// O(n) time, O(h) space
// h = height of the longest branch branch of the tree
export function nodeDepths(root: BinaryTree | null, depth: number = 0): number {
  if (!root) {
    return 0;
  } else {
    return (
      depth +
      nodeDepths(root.left, depth + 1) +
      nodeDepths(root.right, depth + 1)
    );
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1); // one is the root
const two = new BinaryTree(2);
const three = new BinaryTree(3);
const four = new BinaryTree(4);
const five = new BinaryTree(5);
const six = new BinaryTree(6);
const seven = new BinaryTree(7);
const eight = new BinaryTree(8);
const nine = new BinaryTree(9);

root.left = two;
root.right = three;
two.left = four;
two.right = five;
four.left = eight;
four.right = nine;
three.left = six;
three.right = seven;

console.log(nodeDepths(root));
