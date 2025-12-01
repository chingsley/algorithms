class Node:
    """
    An object for storing a single node of a linked list
    it models 2 attributes: data and a link to the next node in the list
    """
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s>" % self.data


class LinkedList:
    """
    Singly linked list
    """

    def __init__(self):
        self.head = None

    def __repr__(self):
        nodes = []
        current = self.head

        while current:
            if current is self.head:
                nodes.append("[Head: %s]" % current.data)
            elif current.next_node is None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next_node
        return '->'.join(nodes)

    def is_empty(self):
        return self.head == None

    def size(self):
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next_node

        return count

    def add(self, data):
        new_node = Node(data)
        new_node.next_node = self.head
        self.head = new_node

    def search(self, key):
        """
        Searches for the 'first' node containing data that matches the key
        Returns the node if found. Returns None if not found
        Takes O(n) time
        """
        current = self.head
        while current:
            if current.data == key:
                return current
            else:
                current = current.next_node

        return None

    def insert(self, data, index):
        """
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding the the node at
        the insertion point takes O(n) time.
        """

        if index == 0:
            self.add(data)
            return

        if index > 0:
            current = self.head
            previous = None
            current_index = 0
            while current_index < index and current != None:
                previous = current
                current = current.next_node
                current_index += 1

            new_node = Node(data)
            new_node.next_node = current
            previous.next_node = new_node

    def node_at_index(self, index):
        if index == 0:
            return self.head
        else:
            current = self.head
            position = 0

            while position < index:
                current = current.next_node
                position += 1

            return current

    def remove(self, data):
        """"
            l.remove(3) will remove the first node that has a data value of 3
            Rturns the removed node if the data is found in the list
            Returns None if the data is not found in the list
            Returns None if the list is empty
        """
        if not self.head:
            return None
        current = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == data:
                found = True
            else:
                previous = current
                current = current.next_node

        if current == self.head:
            self.head = current.next_node
            return current
        elif not current and not found:
            return None
        else:
            previous.next_node = current.next_node
            return current
