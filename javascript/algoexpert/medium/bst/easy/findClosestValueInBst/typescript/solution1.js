export class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 *
 * SOLTION 1: USING RECURSION
 */
// Average Case: O(log(n)) time | O(log(n)) space
// Worst Case: O(n) time | O(n) space
export function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}
function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) {
        return closest;
    }
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    }
    else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    }
    else {
        return closest;
    }
}
