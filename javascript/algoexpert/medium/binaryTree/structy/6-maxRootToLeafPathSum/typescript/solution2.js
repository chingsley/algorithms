/**
 * Sum the values of all the nodes in the tree
 */
import { root } from '../../BinaryTree';
function maxPathSum(root) {
    const treeInfo = { maxPath: -Infinity };
    sumPath(root, 0, treeInfo);
    return treeInfo.maxPath;
}
;
function sumPath(node, currentPathSum, treeInfo) {
    if (node === null)
        return;
    currentPathSum += node.value;
    if (node.left === null && node.right === null) {
        if (currentPathSum > treeInfo.maxPath) {
            treeInfo.maxPath = currentPathSum;
        }
        return;
    }
    sumPath(node.left, currentPathSum, treeInfo);
    sumPath(node.right, currentPathSum, treeInfo);
}
console.log(maxPathSum(root));
