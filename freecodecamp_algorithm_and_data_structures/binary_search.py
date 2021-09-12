def binary_search(collection, target):
    """
      - Assumes that the argument 'collection' has been sorted
      - Run time: O(log n) - NOT including the time it took to sort the collection before passing it as argument
    """
    first = 0
    last = len(collection) - 1

    while first <= last:
        midpoint = (first + last) // 2
        if collection[midpoint] == target:
            return midpoint
        elif collection[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1
    return None
