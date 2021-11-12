// O9d) time, O(1) space
// where d = depth of the deeper descendant
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    descendant = descendant.ancestor;
    depth++;
  }

  return depth;
}

function backtrackAncestralTree(lowerDescendant, upperDescendant, diff) {
  // first, raise deeper descendant up to be on the same level as upper desc
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }

  while (lowerDescendant !== upperDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    upperDescendant = upperDescendant.ancestor;
  }

  return lowerDescendant;
}
