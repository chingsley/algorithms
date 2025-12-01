/**
 * Find the maximum Path Sum
 */
import { root } from '../../BinaryTree';
function maxPathSum(root) {
    return getMaxPathSum(root, 0);
}
function getMaxPathSum(node, currentPathSum) {
    if (node === null)
        return -Infinity;
    currentPathSum += node.value; // ** Very important to remember!
    if (node.left === null && node.right === null) {
        return currentPathSum;
    }
    const leftPathSum = getMaxPathSum(node.left, currentPathSum);
    const rightPathSum = getMaxPathSum(node.right, currentPathSum);
    return Math.max(leftPathSum, rightPathSum);
}
console.log(maxPathSum(root));
