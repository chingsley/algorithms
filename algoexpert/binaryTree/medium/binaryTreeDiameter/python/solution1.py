# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


# O(n) time | O(h) space
def binaryTreeDiameter(tree):
    treeInfo = { "count": 0}
    findLongestPath(tree, treeInfo)
    return treeInfo["count"]


def findLongestPath(node, treeInfo):
    if node == None:
        return 0

    leftCount = findLongestPath(node.left, treeInfo)
    rightCount = findLongestPath(node.right, treeInfo)

    treeInfo["count"] = max(treeInfo["count"], leftCount + rightCount)
    
    return max(leftCount, rightCount) + 1