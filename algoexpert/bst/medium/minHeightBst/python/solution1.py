# O(n) time | O(n) space
def minHeightBst(array):
    return bstFromRange(0, len(array) - 1, array)


def bstFromRange(i, j, array):
    if i > j:
        return None
        
    midIdx = (i + j) // 2
    bst = BST(array[midIdx])
    bst.left = bstFromRange(i, midIdx - 1, array)
    bst.right = bstFromRange(midIdx + 1, j, array)
    return bst


class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
