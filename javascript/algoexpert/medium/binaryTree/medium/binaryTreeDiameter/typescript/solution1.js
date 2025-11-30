// This is an input class. Do not edit.
export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class TreeInfo {
    constructor() {
        this.maxDiameter = 0;
    }
}
// O(n) time | O(d) space
// n = no. of nodes
// d = depth of the tree
export function binaryTreeDiameter(tree) {
    const treeInfo = new TreeInfo();
    calculateDepth(tree, treeInfo);
    return treeInfo.maxDiameter;
}
function calculateDepth(node, treeInfo) {
    if (!node)
        return 0;
    const leftDepth = calculateDepth(node.left, treeInfo);
    const rightDepth = calculateDepth(node.right, treeInfo);
    const nodeDiameter = leftDepth + rightDepth;
    if (nodeDiameter > treeInfo.maxDiameter) {
        treeInfo.maxDiameter = nodeDiameter;
    }
    return Math.max(leftDepth, rightDepth) + 1;
}
