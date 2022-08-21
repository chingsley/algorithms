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

class TreeInfo{
  isBalanced: boolean;
  constructor() {
    this.isBalanced = true;
  }
}

// O(n) time (every node is visited once),
// O(h) space (due to recursive calls)
// n = no. of nodes in tree
// h = height of the tree
export function heightBalancedBinaryTree(tree: BinaryTree): boolean {
  const treeInfo = new TreeInfo();
  checkNodeBalance(tree, treeInfo);
  return treeInfo.isBalanced;
}


function checkNodeBalance(node: BinaryTree | null, treeInfo: TreeInfo): number {
  if(!node) return 0;
  const leftHeight = checkNodeBalance(node.left, treeInfo);
  const rightHeight = checkNodeBalance(node.right, treeInfo);
  if(Math.abs(leftHeight - rightHeight) > 1) {
    treeInfo.isBalanced = false;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}



const test = {
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": null, "right": "6", "value": 3},
      {"id": "4", "left": null, "right": null, "value": 4},
      {"id": "5", "left": "7", "right": "8", "value": 5},
      {"id": "6", "left": "9", "right": "10", "value": 6},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8}
    ],
    "root": "1"
  }
}