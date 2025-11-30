{
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        // O(d) time | O(1) space
        // d = depth of the tree
        function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
            const h1 = getHeight(descendantOne);
            const h2 = getHeight(descendantTwo);
            if (h1 > h2) {
                return backTrack(descendantOne, descendantTwo, h1 - h2);
            }
            else {
                return backTrack(descendantTwo, descendantOne, h2 - h1);
            }
        }
        function getHeight(desc) {
            let height = 0;
            while (desc.ancestor !== null) {
                height += 1;
                desc = desc.ancestor;
            }
            return height;
        }
        function backTrack(lowerDesc, upperDesc, diff) {
            while (diff > 0) {
                lowerDesc = lowerDesc.ancestor;
                diff -= 1;
            }
            if (lowerDesc === upperDesc)
                return lowerDesc;
            while (lowerDesc.ancestor !== upperDesc.ancestor) {
                lowerDesc = lowerDesc.ancestor;
                upperDesc = upperDesc.ancestor;
            }
            return lowerDesc.ancestor;
        }
    }
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        function getYoungestCommonAncestor(topAncestor, // can be solved without this. We know that a desc.ancestor === null, then desc is the topAncestor
        descendantOne, descendantTwo) {
            const d1Height = getHeight(descendantOne);
            const d2Height = getHeight(descendantTwo);
            let lowerDesc = null;
            let higherDesc = null;
            let [lowerDescHeight, higherDescHeight] = [0, 0];
            if (d1Height > d2Height) {
                higherDesc = descendantTwo;
                higherDescHeight = d2Height;
                lowerDesc = descendantOne;
                ;
                lowerDescHeight = d1Height;
            }
            else {
                higherDesc = descendantOne;
                higherDescHeight = d1Height;
                lowerDesc = descendantTwo;
                lowerDescHeight = d2Height;
            }
            while (lowerDescHeight > higherDescHeight) {
                lowerDesc = lowerDesc.ancestor;
                lowerDescHeight -= 1;
            }
            if (lowerDesc === higherDesc)
                return lowerDesc;
            while (lowerDesc.ancestor !== null && lowerDesc.ancestor !== higherDesc.ancestor) {
                lowerDesc = lowerDesc.ancestor;
                higherDesc = higherDesc.ancestor;
            }
            return lowerDesc.ancestor;
        }
        function getHeight(desc) {
            let height = 0;
            while (desc.ancestor !== null) {
                desc = desc.ancestor;
                height += 1;
            }
            return height;
        }
        // NOT IN USE. BUT COOL RECURSIVE WAY TO GET THE DESCENDANT HEIGHT
        function getHeightByRecursion(desc) {
            if (desc === null)
                return 1;
            return 1 + getHeight(desc.ancestor);
        }
    }
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        // O(d) time | O(1) space
        // d = depth of the tree
        function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
            const d1Height = getHeight(descendantOne);
            const d2Height = getHeight(descendantTwo);
            let commonAncestor = topAncestor;
            if (d1Height > d2Height) {
                commonAncestor = getCommonAncestor([descendantOne, d1Height], [descendantTwo, d2Height]);
            }
            else {
                commonAncestor = getCommonAncestor([descendantTwo, d2Height], [descendantOne, d1Height]);
            }
            return commonAncestor;
        }
        function getCommonAncestor(lower, higher) {
            let [lowerDesc, lowerHeight] = lower;
            let [higherDesc, higherHeight] = higher;
            while (lowerHeight > higherHeight) {
                lowerDesc = lowerDesc.ancestor;
                lowerHeight -= 1;
            }
            if (lowerDesc === higherDesc)
                return lowerDesc;
            while (lowerDesc.ancestor !== higherDesc.ancestor) {
                lowerDesc = lowerDesc.ancestor;
                higherDesc = higherDesc.ancestor;
            }
            return lowerDesc.ancestor;
        }
        function getHeight(desc) {
            let height = 0;
            while (desc.ancestor !== null) {
                desc = desc.ancestor;
                height += 1;
            }
            return height;
        }
    }
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        // O(d) time | O(1) space
        // d = depth of the tree
        function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
            const h1 = getHeight(descendantOne);
            const h2 = getHeight(descendantTwo);
            if (h1 > h2) {
                return backtrack(descendantOne, descendantTwo, h1 - h2);
            }
            else {
                return backtrack(descendantTwo, descendantOne, h2 - h1);
            }
        }
        function backtrack(dLower, dHigher, heightDiff) {
            while (heightDiff > 0) {
                dLower = dLower.ancestor;
                heightDiff -= 1;
            }
            if (dLower === dHigher)
                return dLower;
            while (dLower.ancestor !== dHigher.ancestor) {
                dLower = dLower.ancestor;
                dHigher = dHigher.ancestor;
            }
            return dLower.ancestor;
        }
        function getHeight(node) {
            let height = 0;
            while (node.ancestor !== null) {
                height += 1;
                node = node.ancestor;
            }
            return height;
        }
        // not in use!
        function getHeightByRecursion(node, height = 0) {
            if (node.ancestor === null)
                return height;
            return getHeightByRecursion(node.ancestor, height + 1);
        }
    }
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        // O(d) time | O(1) space
        // d = depth of the tree
        function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
            const h1 = getHeight(descendantOne);
            const h2 = getHeight(descendantTwo);
            if (h1 > h2) {
                return backtrack(descendantOne, descendantTwo, h1 - h2);
            }
            else {
                return backtrack(descendantTwo, descendantOne, h2 - h1);
            }
        }
        function backtrack(d1, d2, heightDiff) {
            while (heightDiff > 0) {
                d1 = d1.ancestor;
                heightDiff -= 1;
            }
            if (d1 === d2)
                return d1;
            while (d1.ancestor !== d2.ancestor) {
                d1 = d1.ancestor;
                d2 = d2.ancestor;
            }
            return d1.ancestor;
        }
        function getHeight(d) {
            let height = 0;
            while (d.ancestor !== null) {
                d = d.ancestor;
                height += 1;
            }
            return height;
        }
    }
    {
        // This is an input class. Do not edit.
        class AncestralTree {
            constructor(name) {
                this.name = name;
                this.ancestor = null;
            }
        }
        // O(d) time | O(1) space
        // d = depth of the tree
        function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
            const d1 = getDepth(descendantOne);
            const d2 = getDepth(descendantTwo);
            if (d1 > d2) {
                return backtrack(descendantOne, descendantTwo, d1 - d2);
            }
            else {
                return backtrack(descendantTwo, descendantOne, d2 - d1);
            }
        }
        function backtrack(lower, upper, diff) {
            while (diff > 0) {
                lower = lower.ancestor;
                diff -= 1;
            }
            if (lower === upper)
                return lower;
            while (lower.ancestor !== upper.ancestor) {
                lower = lower.ancestor;
                upper = upper.ancestor;
            }
            return lower.ancestor;
        }
        function getDepth(node) {
            let currentNode = node;
            let depth = 0;
            while (currentNode.ancestor !== null) {
                currentNode = currentNode.ancestor;
                depth += 1;
            }
            return depth;
        }
    }
}
export const ___ = '___';
