// This is an input class. Do not edit.
export class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time | O(h) space
export function sumBsts(tree) {
    return sumNodes(tree)[5];
}
function sumNodes(node) {
    if (node === null)
        return [true, Infinity, -Infinity, 0, 0, 0];
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
function isNodeBST(node, maxLeft, minRight) {
    if (node.value <= maxLeft)
        return false;
    if (node.value > minRight)
        return false;
    return true;
}
