# O(log(n)) time | O(1) space
def findClosestValueInBst(tree, target):
    closest = tree.value
    currNode = tree

    while(currNode != None):
        if abs(target - currNode.value) < abs(target - closest):
            closest = currNode.value

        if target < currNode.value:
            currNode = currNode.left
        elif target > currNode.value:
            currNode = currNode.right
        else:
            return currNode.value
    
    return closest


# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None