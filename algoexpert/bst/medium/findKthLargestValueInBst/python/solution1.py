# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def findKthLargestValueInBst(tree, k):
    array = []
    parseTreeInDiscendingOrder(tree, array)
    return array[k - 1]

def parseTreeInDiscendingOrder(node, array):
    if node == None:
        return
    parseTreeInDiscendingOrder(node.right, array)
    array.append(node.value)
    parseTreeInDiscendingOrder(node.left, array)