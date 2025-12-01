{
  {
    # This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


# O(max(m, n)) time | O(max(m, n)) space
# m, n = lenghts of listOne and listTwo respectively
def sumOfLinkedLists(linkedListOne, linkedListTwo):
    head = LinkedList(0)
    l1, l2 = linkedListOne, linkedListTwo
    carry = 0
    currNode = head
    while l1 != None or l2 != None or carry != 0:
        val1 = l1.value if l1 is not None else 0
        val2 = l2.value if l2 is not None else 0
        sum = val1 + val2 + carry
        val = sum % 10

        currNode.next = LinkedList(val)
        currNode = currNode.next
        l1 = l1.next if l1 is not None else None
        l2 = l2.next if l2 is not None else None
        carry = sum // 10
        
    return head.next

  }
}