import { root } from '../../BinaryTree';
// DFS (Iteration)
function depthFirstsearch(root) {
    const stack = [root];
    const array = [];
    while (stack.length > 0) {
        const current = stack.pop();
        array.push(current.value);
        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);
    }
    return array;
}
console.log(depthFirstsearch(root));
