import { BinaryTree } from './solution1';
{
  {
    interface TreeInfo { depthSum: number; };

    // O(n) time (n = no. of tree nodes)
    // O(h) space (h = height of the tree)
    function nodeDepths(root: BinaryTree) {
      const treeInfo: TreeInfo = { depthSum: 0 };
      sumDepths(root, 0, treeInfo);
      return treeInfo.depthSum;
    }

    function sumDepths(tree: BinaryTree | null, currNodeDepth: number, treeInfo: TreeInfo) {
      if (tree === null) return;

      treeInfo.depthSum += currNodeDepth;
      sumDepths(tree.left, currNodeDepth + 1, treeInfo);
      sumDepths(tree.right, currNodeDepth + 1, treeInfo);
    }

  }
  {
    // O(n) time (n = no. of tree nodes)
    // O(h) space (h = height of the tree)
    function nodeDepths(root: BinaryTree) {
      const treeInfo: TreeInfo = { nodeDepths: 0 };
      sumNodeDepths(root, 0, treeInfo);
      return treeInfo.nodeDepths;
    };

    function sumNodeDepths(node: BinaryTree | null, currentNodeDepth: number, treeInfo: TreeInfo) {
      if (node === null) return;

      treeInfo.nodeDepths += currentNodeDepth; // this line must come before the next line, otherwise it will fail
      currentNodeDepth += 1;
      sumNodeDepths(node.left, currentNodeDepth, treeInfo);
      sumNodeDepths(node.right, currentNodeDepth, treeInfo);
    }
    interface TreeInfo { nodeDepths: number; }
  }
  {
    function nodeDepths(root: BinaryTree) {
      return sumDepths(root, 0);
    }

    function sumDepths(tree: BinaryTree | null, totalDepth: number): number {
      if (tree === null) return 0;

      const leftDepth = sumDepths(tree.left, totalDepth + 1);
      const rightDepth = sumDepths(tree.right, totalDepth + 1);
      return totalDepth + leftDepth + rightDepth;
    }
  }
  { // ITERATION (DFS) | O(n) time | O(d) space 
    function nodeDepths(root: BinaryTree) {
      const stack: [[BinaryTree, number]] = [[root, 0]];
      let sum = 0;

      while (stack.length > 0) {
        const [node, depth] = stack.pop()!;
        sum += depth;
        if (node.left) stack.push([node.left, depth + 1]);
        if (node.right) stack.push([node.right, depth + 1]);
      }

      return sum;
    }
  }
  { // ITERATION (BFS) | O(n) time | O(d) space 
    function nodeDepths(root: BinaryTree) {
      const queue: [[BinaryTree, number]] = [[root, 0]];
      let sum = 0;

      while (queue.length > 0) {
        const [node, depth] = queue.shift()!;
        sum += depth;
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
      }

      return sum;
    }
  }
  { // RECURSION ("top-down, then bubble up")
    function nodeDepths(root: BinaryTree) {
      return calcNodeDepth(root, 0);
    }

    function calcNodeDepth(root: BinaryTree | null, currentNodeDepth: number): number {
      if (root === null) return 0;

      if (root.left === null && root.right === null) {
        return currentNodeDepth;
      }

      const left = calcNodeDepth(root.left, currentNodeDepth + 1);
      const right = calcNodeDepth(root.right, currentNodeDepth + 1);
      return left + right + currentNodeDepth;
    }
  }
  {
    // O(n) time | O(d) space
    function nodeDepths(root: BinaryTree) {
      const treeInfo: TreeInfo = { depthSum: 0 };
      traverse(root, 0, treeInfo);
      return treeInfo.depthSum;
    }

    function traverse(node: BinaryTree | null, currentNodeDepth: number, treeInfo: TreeInfo) {
      if (node === null) return;

      treeInfo.depthSum += currentNodeDepth;
      traverse(node.left, currentNodeDepth + 1, treeInfo);
      traverse(node.right, currentNodeDepth + 1, treeInfo);
    }

    interface TreeInfo { depthSum: number; };
  }
  {
    function nodeDepths(root: BinaryTree) {
      return sumDepths(root, 0);
    }

    // O(n) time | O(h) space (n = no. of nodes, h = tree height)
    function sumDepths(node: BinaryTree | null, currNodeDepth: number): number {
      if (node === null) return 0;

      const leftDepth = sumDepths(node.left, currNodeDepth + 1);
      const rightDepth = sumDepths(node.right, currNodeDepth + 1);
      return leftDepth + rightDepth + currNodeDepth;
    }
  }

}