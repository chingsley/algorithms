# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# O(n) time | O(h) space
def symmetricalTree(tree):
    return isMirror(tree.left, tree.right)

def isMirror(leftNode, rightNode):
    if leftNode == None and rightNode != None:
        return False

    if leftNode != None and rightNode == None:
        return False

    if leftNode == None and rightNode == None:
        return True

    if leftNode.value != rightNode.value:
        return False

    isLeftMirror = isMirror(leftNode.right, rightNode.left)
    isRightMirror = isMirror(leftNode.left, rightNode.right)
    return isLeftMirror and isRightMirror