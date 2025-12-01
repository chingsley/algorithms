export function nodeDepths(root) {
    const treeInfo = { depthSum: 0 };
    sumDepths(root, 0, treeInfo);
    return treeInfo.depthSum;
}
function sumDepths(tree, currNodeDepth, treeInfo) {
    if (tree === null)
        return;
    treeInfo.depthSum += currNodeDepth;
    sumDepths(tree.left, currNodeDepth + 1, treeInfo);
    sumDepths(tree.right, currNodeDepth + 1, treeInfo);
}
;
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
