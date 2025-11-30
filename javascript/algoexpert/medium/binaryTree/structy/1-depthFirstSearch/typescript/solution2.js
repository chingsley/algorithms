import { root } from '../../BinaryTree';
// DFS (Recursion)
function depthFirstsearch(root) {
    const array = [];
    dfs(root, array);
    return array;
}
function dfs(root, array) {
    if (root === null)
        return;
    array.push(root.value);
    dfs(root.left, array);
    dfs(root.right, array);
}
console.log(depthFirstsearch(root));
