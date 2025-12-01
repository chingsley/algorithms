# This is an input class. Do not edit.
class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

# O(n + m) time | O(max(n, m)) space
def mergeBinaryTrees(tree1, tree2):
    if tree1 == None and tree2 == None:
        return None
        
    tree1Val, tree2Val = 0, 0
    if tree1 != None:
        tree1Val = tree1.value
    if tree2 != None:
        tree2Val = tree2.value

    bst = BinaryTree(tree1Val + tree2Val)
    tree1Left, tree1Right, tree2Left, tree2Right = None, None, None, None
    if tree1 != None:
        tree1Left, tree1Right = tree1.left, tree1.right
    if tree2 != None:
        tree2Left, tree2Right = tree2.left, tree2.right
        
    bst.left = mergeBinaryTrees(tree1Left, tree2Left)
    bst.right = mergeBinaryTrees(tree1Right, tree2Right)
    
    return bst