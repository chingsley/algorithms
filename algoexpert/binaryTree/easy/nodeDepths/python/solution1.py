# O(n) time | O(h) space
def nodeDepths(root):
    return depthFrom(root, 0)


def depthFrom(node, depth):
    if node == None:
        return 0

    left = depthFrom(node.left, depth + 1) 
    right = depthFrom(node.right, depth + 1)
    return left + right + depth

# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
