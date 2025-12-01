export class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
{
    {
        // O(n) time | O(d) space;
        // n = no. of nodes in the tree | d = depth or height of the tree
        function validateBst(tree) {
            return validateNode(tree, -Infinity, Infinity);
        }
        function validateNode(node, lowerBound, upperBound) {
            if (node === null)
                return true;
            if (node.value < lowerBound || node.value >= upperBound)
                return false;
            const isValidLeftSubtree = validateNode(node.left, lowerBound, node.value);
            const isValidRightSubtree = validateNode(node.right, node.value, upperBound);
            return isValidLeftSubtree && isValidRightSubtree;
        }
    }
    {
        // O(n) time | O(d) space;
        // n = no. of nodes in the tree | d = depth or height of the tree
        function validateBst(tree) {
            return validate(tree, -Infinity, Infinity);
        }
        function validate(tree, lowerBound, upperBound) {
            if (tree === null)
                return true;
            // is valid if: lowerBound <= tree.value < upperBound
            if (lowerBound > tree.value || tree.value >= upperBound)
                return false;
            const isValidLeft = validate(tree.left, lowerBound, tree.value);
            const isValidRight = validate(tree.right, tree.value, upperBound);
            return isValidLeft && isValidRight;
        }
    }
    {
        function validateBst(tree) {
            return validate(tree, -Infinity, Infinity);
        }
        function validate(tree, lowerBound, upperBound) {
            if (tree === null)
                return true;
            if (tree.value < lowerBound || tree.value >= upperBound)
                return false;
            const isValidLeft = validate(tree.left, lowerBound, tree.value);
            const isValidRight = validate(tree.right, tree.value, upperBound);
            return isValidLeft && isValidRight;
        }
    }
    {
        // O(n) time | O(h) space
        // n = no. of nodes | h = height of the tree
        function validateBst(tree) {
            return validateNode(tree, [-Infinity, Infinity]);
        }
        function validateNode(node, [lowerBound, upperBound]) {
            if (node === null)
                return true;
            if (node.value >= upperBound || node.value < lowerBound)
                return false;
            const isValidLeft = validateNode(node.left, [lowerBound, node.value]);
            const isValidRight = validateNode(node.right, [node.value, upperBound]);
            return isValidLeft && isValidRight;
        }
    }
    {
        function validateBst(tree) {
            const [isBst] = checkValidBst(tree);
            return isBst;
        }
        // O(n) time | O(h) space (n = no. of nodes, h = height of tree)
        function checkValidBst(node) {
            if (node === null)
                return [true, Infinity, -Infinity];
            const [isLeftBst, minLeft, maxLeft] = checkValidBst(node.left);
            const [isRightBst, minRight, maxRight] = checkValidBst(node.right);
            const min = Math.min(node.value, minLeft, minRight);
            const max = Math.max(node.value, maxLeft, maxRight);
            if (isLeftBst && isRightBst &&
                node.value > maxLeft && node.value <= minRight)
                return [true, min, max];
            return [false, min, max];
        }
    }
    {
        // O(n) time | O(h) space (n = no. of nodes, h = height of tree)
        function validateBst(tree) {
            return validateNodeInRange(tree, -Infinity, Infinity);
        }
        function validateNodeInRange(node, min, max) {
            if (node === null)
                return true;
            if (node.value < min || node.value >= max)
                return false;
            const isValidLeft = validateNodeInRange(node.left, min, node.value);
            const isValidRight = validateNodeInRange(node.right, node.value, max);
            return isValidLeft && isValidRight;
        }
    }
}
