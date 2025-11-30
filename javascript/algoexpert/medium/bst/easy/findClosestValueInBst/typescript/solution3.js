class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/**
 *
 * SOLTION 3: USING ITERATION
 */
// Average Case: O(log(n)) time | O(1) space
// Worst Case: O(n) time | O(1) space
{
    function findClosestValueInBst3(tree, target) {
        let currentNode = tree;
        let closest = Infinity;
        while (currentNode !== null) {
            if (absDiff(target, currentNode.value) < absDiff(target, closest)) {
                closest = currentNode.value;
            }
            if (target < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (target > currentNode.value) {
                currentNode = currentNode.right;
            }
            else {
                break;
            }
        }
        return closest;
    }
    // returns the absolute difference of two numbers
    const absDiff = (num1, num2) => {
        return Math.abs(num1 - num2);
    };
}
