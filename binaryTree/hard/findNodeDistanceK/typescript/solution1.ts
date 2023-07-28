// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

type TParents = { [key: number]: BinaryTree | null; };

// O(n) time | O(n) space (n = no. of nodes in tree)
export function findNodesDistanceK(tree: BinaryTree, target: number, k: number) {
  const parents: TParents = {};
  buildParentsHash(tree, null, parents);
  const targetNode = getTargetNode(tree, parents, target);


  const queue: [[BinaryTree, number]] = [[targetNode!, 0]];
  const seen: Set<number> = new Set();

  const result: number[] = [];
  while (queue.length > 0) {
    const log = queue.map(([b, v]) => [b.value, v]);
    console.log(log);
    const [node, distance] = queue.shift()!;
    seen.add(node.value);



    if (distance === k) {
      result.push(node.value);
    } else {
      const parent = parents[node.value];
      if (parent && !seen.has(parent.value)) queue.push([parent, distance + 1]);
      if (node.left !== null && !seen.has(node.left.value)) queue.push([node.left, distance + 1]);
      if (node.right !== null && !seen.has(node.right.value)) queue.push([node.right, distance + 1]);
    }
  }

  return result;
}


function buildParentsHash(node: BinaryTree | null, parent: BinaryTree | null, parents: TParents) {
  if (node === null) return;

  parents[node.value] = parent;
  buildParentsHash(node.left, node, parents);
  buildParentsHash(node.right, node, parents);
}

function getTargetNode(root: BinaryTree, parents: TParents, target: number): BinaryTree {
  let targetNode: BinaryTree | null;
  let targetNodeParent = parents[target];
  if (targetNodeParent === null) {
    targetNode = root;
  } else {
    targetNode = targetNodeParent.left;
    if (targetNode === null || targetNode.value !== target) {
      targetNode = targetNodeParent.right;
    }
  }

  return targetNode as BinaryTree;
}
