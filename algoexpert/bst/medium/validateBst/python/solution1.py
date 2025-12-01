import math

# This is an input class. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


# O(n) time | O(h) space
def validateBst(tree):
    return isValid(tree, -math.inf, math.inf)

def isValid(node, lBound, uBound):
    if node == None:
        return True

    if not(node.value >= lBound and node.value < uBound):
        return False

    isValidLeft = isValid(node.left, lBound, node.value)
    isValidRight = isValid(node.right, node.value, uBound)
    return isValidLeft and isValidRight