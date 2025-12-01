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



// O(n) time
// O(n + d) space (converges to O(n) space where n is much larger than d) 
// (N = min(n1, n2), d = min(d1, d2))
// where n1 = no. of nodes in tree1, n2 = no. of nodes in tree2
//       d1 = depth of tree1, d2 = depth of tree 2
export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  const mergedRoot = new BinaryTree(tree1.value + tree2.value);
  merge(tree1.left, tree2.left, mergedRoot, true);
  merge(tree1.right, tree2.right, mergedRoot, false);
  return mergedRoot;
}

type TreeOrNull = BinaryTree | null;
function merge(node1: TreeOrNull, node2: TreeOrNull, currNode: BinaryTree, isLeft: boolean) {
  if (node1 === null && node2 === null) return;

  let [val1, val2] = [0, 0];
  let [node1Left, node1Right, node2Left, node2Right]: TreeOrNull[] = [null, null, null, null];
  if (node1 !== null) {
    val1 = node1.value;
    [node1Left, node1Right] = [node1.left, node1.right];
  }
  if (node2 !== null) {
    val2 = node2.value;
    [node2Left, node2Right] = [node2.left, node2.right];
  }

  if (node1 !== null && node2 === null) {
    if (isLeft) {
      currNode.left = node1;
    } else {
      currNode.right = node1;
    }
    return;
  } else if (node1 === null && node2 !== null) {
    if (isLeft) {
      currNode.left = node2;
    } else {
      currNode.right = node2;
    }
    return;
  }

  const newNode = new BinaryTree(val1 + val2);
  if (isLeft) {
    currNode.left = newNode;
    currNode = currNode.left;
  } else {
    currNode.right = newNode;
    currNode = currNode.right;
  }

  merge(node1Left, node2Left, currNode, true);
  merge(node1Right, node2Right, currNode, false);
}
