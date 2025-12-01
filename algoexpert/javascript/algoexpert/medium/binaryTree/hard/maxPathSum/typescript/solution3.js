class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export function maxPathSum(tree) {
    const [currentMax, _] = maxPathSumHelper(tree);
    return currentMax;
}
function maxPathSumHelper(tree) {
    if (tree === null)
        return [-Infinity, -Infinity];
    if (tree.left === null && tree.right === null) {
        return [tree.value, tree.value];
    }
    const [leftMax, leftRunning] = maxPathSumHelper(tree.left);
    const [rightMax, rightRunning] = maxPathSumHelper(tree.right);
    const maxAtNode = Math.max(tree.value, tree.value + leftRunning, tree.value + rightRunning, tree.value + leftRunning + rightRunning);
    const currentMax = Math.max(maxAtNode, leftMax, rightMax);
    const currentRunning = Math.max(tree.value, tree.value + leftRunning, tree.value + rightRunning);
    return [currentMax, currentRunning];
}
