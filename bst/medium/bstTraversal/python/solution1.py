# left, push, right
def inOrderTraverse(tree, array):
    if tree == None:
        return array
        
    inOrderTraverse(tree.left, array)
    array.append(tree.value)
    inOrderTraverse(tree.right, array)
    return array

# push, left, right
def preOrderTraverse(tree, array):
    if tree == None:
        return array
        
    array.append(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
    return array

# left, right, push
def postOrderTraverse(tree, array):
    if tree == None:
        return array
    
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.append(tree.value)
    return array