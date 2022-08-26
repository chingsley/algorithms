import { BinaryTree, root } from '../../BinaryTree';


// DFS (Recursion)
function depthFirstsearch(root: BinaryTree) {
  const array: number[] = [];
  dfs(root, array);

  return array;
}

function dfs(root: BinaryTree, array: number[]) {
  if (root === null) return;

  array.push(root.value);
  dfs(root.left, array);
  dfs(root.right, array);
}

console.log(
  depthFirstsearch(root)
);

