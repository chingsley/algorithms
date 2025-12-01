{
    {
        // O(log(n)) time | O(1) space
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            let ancestor = getAncestor(nodeOne, nodeTwo);
            let descendant = null;
            if (ancestor !== null) {
                descendant = nodeThree;
            }
            else {
                ancestor = getAncestor(nodeThree, nodeTwo);
                if (ancestor !== null)
                    descendant = nodeOne;
            }
            if (descendant === null)
                return false;
            ancestor = getAncestor(nodeTwo, descendant);
            if (ancestor === null)
                return false;
            return true;
        }
        function getAncestor(parent, child) {
            let currNode = parent;
            while (currNode !== null) {
                if (currNode.value === child.value) {
                    return parent;
                }
                else if (child.value < currNode.value) {
                    currNode = currNode.left;
                }
                else {
                    currNode = currNode.right;
                }
            }
            return null;
        }
        class BST {
            constructor(value) {
                this.value = value;
                this.left = null;
                this.right = null;
            }
        }
    }
    {
        // O(h) time | O(1) space
        // h = height of the tree
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            let ancestor = null;
            let descendant = null;
            ancestor = checkAncestor(nodeOne, nodeTwo);
            if (ancestor !== null) {
                descendant = nodeThree;
            }
            else {
                ancestor = checkAncestor(nodeThree, nodeTwo);
                if (ancestor !== null)
                    descendant = nodeOne;
            }
            if (descendant === null)
                return false;
            ancestor = checkAncestor(nodeTwo, descendant);
            if (ancestor === null)
                return false;
            return true;
        }
        function checkAncestor(ancestor, descendant) {
            let currNode = ancestor;
            while (currNode !== null) {
                if (currNode.value === descendant.value)
                    return ancestor;
                if (descendant.value < currNode.value) {
                    currNode = currNode.left;
                }
                else {
                    currNode = currNode.right;
                }
            }
            return null;
        }
    }
    {
        // O(d) time | O(1) space
        // d = depth or height of the tree
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            if (parentToChild(nodeOne, nodeTwo)) {
                return parentToChild(nodeTwo, nodeThree);
            }
            if (parentToChild(nodeThree, nodeTwo)) {
                return parentToChild(nodeTwo, nodeOne);
            }
            return false;
        }
        function parentToChild(parent, child) {
            let currNode = parent;
            while (currNode !== null) {
                if (currNode.value === child.value)
                    return true;
                if (child.value < currNode.value) {
                    currNode = currNode.left;
                }
                else {
                    currNode = currNode.right;
                }
            }
            return false;
        }
    }
    {
        // O(h) time | O(1) space
        // h = height of the tree
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            if (parentToChild(nodeOne, nodeTwo)) {
                return parentToChild(nodeTwo, nodeThree);
            }
            if (parentToChild(nodeThree, nodeTwo)) {
                return parentToChild(nodeTwo, nodeOne);
            }
            return false;
        }
        function parentToChild(parent, child) {
            let currNode = parent;
            while (currNode !== null) {
                if (child.value === currNode.value)
                    return true;
                if (child.value < currNode.value) {
                    currNode = currNode.left;
                }
                else {
                    currNode = currNode.right;
                }
            }
            return false;
        }
    }
    {
        // O(d) time | O(1) space
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            if (parentToChild(nodeOne, nodeTwo))
                return parentToChild(nodeTwo, nodeThree);
            if (parentToChild(nodeThree, nodeTwo))
                return parentToChild(nodeTwo, nodeOne);
            return false;
        }
        function parentToChild(parent, child) {
            let currNode = parent;
            while (currNode !== null) {
                if (child.value === currNode.value)
                    return true;
                currNode = child.value < currNode.value ? currNode.left : currNode.right;
            }
            return false;
        }
    }
    {
        // O(h) time | O(1) space;
        // h = height of the three
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            if (parentToChild(nodeOne, nodeTwo))
                return parentToChild(nodeTwo, nodeThree);
            if (parentToChild(nodeThree, nodeTwo))
                return parentToChild(nodeTwo, nodeOne);
            return false;
        }
        function parentToChild(parent, child) {
            let currNode = parent;
            while (currNode !== null) {
                if (child.value === currNode.value)
                    return true;
                if (child.value < currNode.value) {
                    currNode = currNode.left;
                }
                else {
                    currNode = currNode.right;
                }
            }
            return false;
        }
    }
    {
        // O(log(n) time) | O(1) space
        // OR O(d) time | O(1) space
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];
            if (findDec(n2, n3))
                return findDec(n1, n2);
            if (findDec(n2, n1))
                return findDec(n3, n2);
            return false;
        }
        function findDec(n1, n2) {
            let currNode = n1;
            while (currNode) {
                if (currNode.value === n2.value)
                    return true;
                currNode = n2.value > currNode.value ? currNode.right : currNode.left;
            }
            return false;
        }
    }
    {
        // O(log(n) time) | O(1) space
        // OR O(d) time | O(1) space
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];
            if (findDec(n1, n2, n3))
                return true;
            return findDec(n3, n2, n1);
        }
        function findDec(n1, n2, n3) {
            let currNode = n1;
            let nodeToFind = n2;
            let res = [];
            while (currNode) {
                if (currNode.value === nodeToFind.value) {
                    res.push(true);
                    if (res.length === 2) {
                        return true;
                    }
                    else {
                        nodeToFind = n3;
                    }
                }
                ;
                currNode = nodeToFind.value > currNode.value ? currNode.right : currNode.left;
            }
            return false;
        }
    }
    {
        // O(log(n) time) | O(1) space
        // OR O(d) time | O(1) space
        function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
            const [n1, n2, n3] = [nodeOne, nodeTwo, nodeThree];
            if (findDecs(n1, n2, n3))
                return true;
            return findDecs(n3, n2, n1);
        }
        function findDecs(n1, n2, n3) {
            let currNode = n1;
            let nodeToFind = n2;
            let found = false;
            while (currNode) {
                if (currNode.value === nodeToFind.value) {
                    if (found)
                        return true;
                    found = true;
                    nodeToFind = n3;
                }
                ;
                currNode = nodeToFind.value > currNode.value ? currNode.right : currNode.left;
            }
            return false;
        }
    }
}
export const __ = '__';
