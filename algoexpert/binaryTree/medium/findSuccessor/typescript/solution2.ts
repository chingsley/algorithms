
// This is an input class. Do not edit.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// O(h) time | O(1) spacce ( h = height of the tree)
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  if (node.right !== null) {
    return getLeftmostNode(node.right);
  }
  return getFirstLeftParent(node);
}

function getLeftmostNode(node: BinaryTree) {
  let leftMostNode: BinaryTree = node;
  while (leftMostNode.left !== null) {
    leftMostNode = leftMostNode.left;
  }
  return leftMostNode;
}

function getFirstLeftParent(node: BinaryTree): BinaryTree | null {
  let currNode = node;
  while (currNode.parent) {
    if (currNode.parent.left === currNode) {
      return currNode.parent;
    } else {
      currNode = currNode.parent;
    }
  }

  return null;
}

/* Recursive implementation for getFirstLeftParent: O(h) time | O(h) space */
  // function getFirstLeftParent(node: BinaryTree | null): BinaryTree | null {
  //    if (node === null) return null;
  //    if (node.parent && node.parent.left === node) {
  //       return node.parent;
  //     }
  //     return getFirstLeftParent(node.parent)
  // }

