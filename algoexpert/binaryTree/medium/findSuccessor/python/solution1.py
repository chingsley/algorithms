# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None, parent=None):
        self.value = value
        self.left = left
        self.right = right
        self.parent = parent

# O(h) time | O(1) space
def findSuccessor(tree, node):
    if node.right != None:
        return leftMostNodeIn(node.right)

    if node.parent == None:
        return None
    
    if node.parent.left == node:
          return node.parent
    else:
        return firstLeftParent(node)


def leftMostNodeIn(node):
    currNode = node
    while currNode.left != None:
        currNode = currNode.left

    return currNode

def firstLeftParent(node):
    currNode = node
    while currNode.parent and currNode.parent.right ==  currNode:
        currNode = currNode.parent

    return currNode.parent