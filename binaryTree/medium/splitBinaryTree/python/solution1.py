# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


# O(n) time | O(h) space
def splitBinaryTree(tree):
    treeSum = getTreeSum(tree)
    if treeSum % 2 != 0:
        return 0

    halfSumInTree = getHalfSumInTree(tree, treeSum // 2)
    if halfSumInTree == (treeSum // 2):
        return halfSumInTree
        
    return 0


def getTreeSum(tree):
    if tree == None:
        return 0

    return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right)


def getHalfSumInTree(tree, halfSum):
    if tree == None:
        return 0

    leftSum = getHalfSumInTree(tree.left, halfSum)
    if leftSum == halfSum:
        return leftSum

    rightSum = getHalfSumInTree(tree.right, halfSum)
    if rightSum == halfSum:
        return rightSum

    return tree.value + leftSum + rightSum
    