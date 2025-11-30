/**
 * Sum the values of all the nodes in the tree
 */
import { root } from '../../BinaryTree';
{
    { // RECURSION
        function treeSum(root) {
            if (root === null)
                return 0;
            return root.value + treeSum(root.left) + treeSum(root.right);
        }
        // console.log(treeSum(root));;
    }
    { // DFT
        function treeSum(root) {
            const stack = [root];
            let sum = 0;
            while (stack.length > 0) {
                const currNode = stack.pop();
                sum += currNode.value;
                if (currNode.left)
                    stack.push(currNode.left);
                if (currNode.right)
                    stack.push(currNode.right);
            }
            return sum;
        }
        // console.log(treeSum(root));
    }
    { // BST
        function treeSum(root) {
            const queue = [root];
            let sum = 0;
            while (queue.length > 0) {
                const currNode = queue.shift();
                sum += currNode.value;
                if (currNode.left)
                    queue.push(currNode.left);
                if (currNode.right)
                    queue.push(currNode.right);
            }
            return sum;
        }
    }
    {
        function treeSum(root) {
            const stack = [root];
            let sum = 0;
            while (stack.length > 0) {
                const current = stack.pop();
                sum += current.value;
                if (current.left)
                    stack.push(current.left);
                if (current.right)
                    stack.push(current.right);
            }
            return sum;
        }
    }
    {
        function treeSum(root) {
            if (root === null)
                return 0;
            let sum = root.value;
            sum += treeSum(root.left);
            sum += treeSum(root.right);
            return sum;
        }
        console.log(treeSum(root));
    }
}
// expect 55
