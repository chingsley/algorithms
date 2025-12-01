# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# O(n) time | O(h) space
def heightBalancedBinaryTree(tree):
    return parseHeight(tree)[0]

def parseHeight(node):
    if node == None:
        return True, 0
        
    isLeftBalanced, leftHeight = parseHeight(node.left)
    isRightBalanced, rightHeight = parseHeight(node.right)
    
    if (not isLeftBalanced) or (not isRightBalanced):
        return False, 0

    if abs(leftHeight - rightHeight) > 1:
        return False, 0

    return True, max(leftHeight, rightHeight) + 1