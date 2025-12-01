/**
 * Sum the values of all the nodes in the tree
 */
import { root } from '../../BinaryTree';
function treeSum(root) {
    const treeInfo = { sum: 0 };
    sumNodes(root, treeInfo);
    return treeInfo.sum;
}
;
function sumNodes(node, treeInfo) {
    if (node === null)
        return;
    treeInfo.sum += node.value;
    sumNodes(node.left, treeInfo);
    sumNodes(node.right, treeInfo);
}
console.log(treeSum(root));
