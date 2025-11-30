class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 *
 * SOLTION 2: USING ITERATION
 */
// Average Case: O(log(n)) time | O(1) space
// Worst Case: O(n) time | O(1) space
export function findClosestValueInBst(tree, target) {
    let closest = Infinity;
    let currentNode = tree;
    while (currentNode !== null) {
        if (Math.abs(currentNode.value - target) < Math.abs(closest - target)) {
            closest = currentNode.value;
        }
        if (currentNode.value === target) {
            return currentNode.value;
        }
        else if (target < currentNode.value) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }
    return closest;
}
