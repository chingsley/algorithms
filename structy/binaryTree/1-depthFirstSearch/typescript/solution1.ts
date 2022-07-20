import { BinaryTree, root } from '../../BinaryTree';


// DFS (Iteration)
function depthFirstsearch(root: BinaryTree) {
  const stack: BinaryTree[] = [root];
  const array: number[] = [];
  while (stack.length > 0) {
    const current = stack.pop();
    array.push(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return array;
}

console.log(
  depthFirstsearch(root)
);

