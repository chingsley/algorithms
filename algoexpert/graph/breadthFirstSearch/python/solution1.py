# Do not edit the class below except
# for the breadthFirstSearch method.
# Feel free to add new properties
# and methods to the class.
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    # O(v + e) time | O(v) space. 
    # e = no. of edges,v = no. of vertices
    def breadthFirstSearch(self, array):
        queue = [self]
        while len(queue) > 0:
            currNode = queue.pop(0)
            array.append(currNode.name)
            for x in currNode.children:
                queue.append(x)
                
        return array
