# Do not edit the class below except
# for the depthFirstSearch method.
# Feel free to add new properties
# and methods to the class.
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        stack = [self]

        while len(stack) > 0:
            currNode = stack.pop()
            array.append(currNode.name)
            for i in reversed(range(0, len(currNode.children))):
                stack.append(currNode.children[i])

        return array