// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  let descendantOneHeight = 0;
  let descendantTwoHeight = 0;
  let lowerDescendant: AncestralTree | null = null;
  let lowerDescendantHeight = 0;
  let upperDescendant: AncestralTree | null = null;
  let upperDescendantHeight = 0;

  let currentNode: AncestralTree | null = descendantOne;
  while (currentNode && currentNode.name !== topAncestor.name) {
    currentNode = currentNode.ancestor;
    descendantOneHeight += 1;
  }

  currentNode = descendantTwo;
  while (currentNode && currentNode.name !== topAncestor.name) {
    currentNode = currentNode.ancestor;
    descendantTwoHeight += 1;
  }

  if (descendantOneHeight > descendantTwoHeight) {
    lowerDescendant = descendantOne;
    lowerDescendantHeight = descendantOneHeight;
    upperDescendant = descendantTwo;
    upperDescendantHeight = descendantTwoHeight;
  } else {
    lowerDescendant = descendantTwo;
    lowerDescendantHeight = descendantTwoHeight;
    upperDescendant = descendantOne;
    upperDescendantHeight = descendantOneHeight;
  }

  while (lowerDescendantHeight > upperDescendantHeight) {
    lowerDescendant = lowerDescendant!.ancestor;
    lowerDescendantHeight -= 1;
  }

  if (lowerDescendant!.name === upperDescendant!.name) {
    return lowerDescendant;
  }

  while (lowerDescendant!.ancestor && upperDescendant!.ancestor && (lowerDescendant!.ancestor.name !== upperDescendant!.ancestor.name)) {
    lowerDescendant = lowerDescendant!.ancestor;
    upperDescendant = upperDescendant!.ancestor;
  }

  return lowerDescendant!.ancestor;
}

const A = new AncestralTree('A');
const B = new AncestralTree('B');
const C = new AncestralTree('C');
const D = new AncestralTree('D');
const E = new AncestralTree('E');
const F = new AncestralTree('F');
const G = new AncestralTree('G');
const H = new AncestralTree('H');
const I = new AncestralTree('I');

I.ancestor = D;
H.ancestor = D;
D.ancestor = B;
E.ancestor = B;
B.ancestor = A;
F.ancestor = C;
G.ancestor = C;
C.ancestor = A;

console.log(
  getYoungestCommonAncestor(A, H, I)
);



// console.log({
//   lowerDescendantHeight,
//   upperDescendantHeight,
//   lowerDescendant: lowerDescendant.name,
//   upperDescendant: upperDescendant.name
// });
