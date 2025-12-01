import math

# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def reconstructBst(preOrderTraversalValues):
    return bstInRange(-math.inf, math.inf, preOrderTraversalValues, { "value": 0})

def bstInRange(lowerB, upperB, array, rootIdx):
    if rootIdx["value"] >= len(array):
        return None

    currVal = array[rootIdx["value"]]
    if not (currVal >= lowerB and currVal < upperB):
        return None

    bst = BST(currVal)
    rootIdx["value"] += 1
    bst.left = bstInRange(lowerB, currVal, array, rootIdx)
    bst.right = bstInRange(currVal, upperB, array, rootIdx)
    return bst
    