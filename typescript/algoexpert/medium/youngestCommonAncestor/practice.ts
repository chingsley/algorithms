{
  {
    // This is an input class. Do not edit.
    class AncestralTree {
      name: string;
      ancestor: AncestralTree | null;

      constructor(name: string) {
        this.name = name;
        this.ancestor = null;
      }
    }

    function getYoungestCommonAncestor(
      topAncestor: AncestralTree, // can be solved without this. We know that a desc.ancestor === null, then desc is the topAncestor
      descendantOne: AncestralTree,
      descendantTwo: AncestralTree,
    ) {

      const d1Height = getHeight(descendantOne);
      const d2Height = getHeight(descendantTwo);

      let lowerDesc: AncestralTree | null = null;
      let higherDesc: AncestralTree | null = null;
      let [lowerDescHeight, higherDescHeight] = [0, 0];

      if (d1Height > d2Height) {
        higherDesc = descendantTwo;
        higherDescHeight = d2Height;
        lowerDesc = descendantOne;;
        lowerDescHeight = d1Height;
      } else {
        higherDesc = descendantOne;
        higherDescHeight = d1Height;
        lowerDesc = descendantTwo;
        lowerDescHeight = d2Height;
      }

      while (lowerDescHeight > higherDescHeight) {
        lowerDesc = lowerDesc!.ancestor;
        lowerDescHeight -= 1;
      }

      if (lowerDesc === higherDesc) return lowerDesc;

      while (lowerDesc!.ancestor !== null && lowerDesc!.ancestor !== higherDesc!.ancestor) {
        lowerDesc = lowerDesc!.ancestor;
        higherDesc = higherDesc!.ancestor;
      }

      return lowerDesc!.ancestor;

    }

    function getHeight(desc: AncestralTree): number {
      let height = 0;
      while (desc.ancestor !== null) {
        desc = desc.ancestor;
        height += 1;
      }

      return height;
    }

    // NOT IN USE. BUT COOL RECURSIVE WAY TO GET THE DESCENDANT HEIGHT
    function getHeightByRecursion(desc: AncestralTree | null): number {
      if (desc === null) return 1;
      return 1 + getHeight(desc.ancestor);
    }

  }
  {
    // This is an input class. Do not edit.
    class AncestralTree {
      name: string;
      ancestor: AncestralTree | null;

      constructor(name: string) {
        this.name = name;
        this.ancestor = null;
      }
    }

    // O(d) time | O(1) space
    // d = depth of the tree
    function getYoungestCommonAncestor(
      topAncestor: AncestralTree,
      descendantOne: AncestralTree,
      descendantTwo: AncestralTree,
    ) {
      const d1Height = getHeight(descendantOne);
      const d2Height = getHeight(descendantTwo);

      let commonAncestor: AncestralTree = topAncestor;
      if (d1Height > d2Height) {
        commonAncestor = getCommonAncestor([descendantOne, d1Height], [descendantTwo, d2Height]);
      } else {
        commonAncestor = getCommonAncestor([descendantTwo, d2Height], [descendantOne, d1Height]);
      }

      return commonAncestor;
    }

    function getCommonAncestor(lower: [AncestralTree, number], higher: [AncestralTree, number]): AncestralTree {
      let [lowerDesc, lowerHeight] = lower;
      let [higherDesc, higherHeight] = higher;

      while (lowerHeight > higherHeight) {
        lowerDesc = lowerDesc.ancestor!;
        lowerHeight -= 1;
      }

      if (lowerDesc === higherDesc) return lowerDesc;

      while (lowerDesc.ancestor !== higherDesc.ancestor) {
        lowerDesc = lowerDesc.ancestor!;
        higherDesc = higherDesc.ancestor!;
      }

      return lowerDesc.ancestor!;
    }

    function getHeight(desc: AncestralTree): number {
      let height = 0;
      while (desc.ancestor !== null) {
        desc = desc.ancestor;
        height += 1;
      }

      return height;
    }
  }
}

export const ___ = '___';