# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


# O(n) time | O(1) space
def removeKthNodeFromEnd(head, k):
    n = k
    first, second, third = head, head.next, head
    while n > 0:
        third = third.next
        n -= 1

    if third == None: # removing head
        head.value = head.next.value
        head.next = head.next.next
        return head
        
    while third and third.next != None:
        first, second, third = first.next, second.next, third.next

    first.next = second.next
    return head