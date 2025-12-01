class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// O(n) time (every node is visited once)
// O(d) space (due to the recursive call stacks)
export function maxPathSum(tree) {
    const treeInfo = { runningMax: -Infinity };
    findMaxPathSum(tree, treeInfo);
    return treeInfo.runningMax;
}
function findMaxPathSum(tree, treeInfo) {
    if (tree === null)
        return -Infinity;
    if (tree.left === null && tree.right === null) {
        if (tree.value > treeInfo.runningMax)
            treeInfo.runningMax = tree.value;
        return tree.value;
    }
    ;
    const leftPathSum = findMaxPathSum(tree.left, treeInfo);
    const rightPathSum = findMaxPathSum(tree.right, treeInfo);
    let maxAtNode = tree.value;
    maxAtNode = Math.max(maxAtNode, maxAtNode + leftPathSum);
    maxAtNode = Math.max(maxAtNode, maxAtNode + rightPathSum);
    if (maxAtNode > treeInfo.runningMax)
        treeInfo.runningMax = maxAtNode;
    let returnVal = tree.value;
    returnVal = Math.max(returnVal, returnVal + Math.max(leftPathSum, rightPathSum));
    return returnVal;
}
;
const root = new BinaryTree(1);
root.left = new BinaryTree(-5);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(6);
/**
 *              1
 *            /    \
 *          -5      3
 *         /
 *       6
 */ 
