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
    const maxAtNode = Math.max(tree.value, tree.value + leftPathSum, tree.value + rightPathSum, tree.value + leftPathSum + rightPathSum);
    if (maxAtNode > treeInfo.runningMax)
        treeInfo.runningMax = maxAtNode;
    return Math.max(tree.value, tree.value + leftPathSum, tree.value + rightPathSum);
}
;
