# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# O(n) time | O(h) space
def evaluateExpressionTree(tree):
    if tree.left == None and tree.right == None:
        return tree.value

    left = evaluateExpressionTree(tree.left)
    right = evaluateExpressionTree(tree.right)
    if tree.value == -1:
        return left + right
    elif tree.value == -2:
        return left - right
    elif tree.value == -3:
        return int(left / right) # this is how to round towards zero. using // will not work for negative values
    else:
        return left * right