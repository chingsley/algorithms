/**
 * Sum the values of all the nodes in the tree
 */
import { root } from '../../BinaryTree';
function treeMin(root) {
    const treeInfo = { min: Infinity };
    findMin(root, treeInfo);
    return treeInfo.min;
}
;
function findMin(node, treeInfo) {
    if (node === null)
        return;
    if (node.value < treeInfo.min)
        treeInfo.min = node.value;
    findMin(node.left, treeInfo);
    findMin(node.right, treeInfo);
}
function treeMax(root) {
    const treeInfo = { max: -Infinity };
    findMax(root, treeInfo);
    return treeInfo.max;
}
;
function findMax(node, treeInfo) {
    if (node === null)
        return;
    if (node.value > treeInfo.max)
        treeInfo.max = node.value;
    findMax(node.left, treeInfo);
    findMax(node.right, treeInfo);
}
console.log('min = ', treeMin(root));
console.log('max = ', treeMax(root));
