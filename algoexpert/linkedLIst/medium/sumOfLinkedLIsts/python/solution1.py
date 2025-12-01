# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


# O(max(m, n)) time | O(max(m, n)) space
# m, n = lenghts of listOne and listTwo respectively
def sumOfLinkedLists(linkedListOne, linkedListTwo):
  newLinkedListHeaderPointer = LinkedList(0)
  currentNode = newLinkedListHeaderPointer
  carry = 0

  nodeOne = linkedListOne
  nodeTwo = linkedListTwo

  while nodeOne is not None or nodeTwo is not None or carry != 0:
    valueOne = nodeOne.value if nodeOne is not None else 0
    valueTwo = nodeTwo.value if nodeTwo is not None else 0
    sumOfValues = valueOne + valueTwo + carry

    newNode = LinkedList(sumOfValues % 10)
    currentNode.next = newNode
    currentNode = newNode

    carry = sumOfValues // 10
    nodeOne = nodeOne.next if nodeOne is not None else None
    nodeTwo = nodeTwo.next if nodeTwo is not None else None


  return newLinkedListHeaderPointer.next
