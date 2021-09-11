def quicksort(values):
    """
    best case: O(n log n)
    worst case: O(n^2)
    """
    if len(values) <= 1:
        return values

    less_than_pivot = []
    greater_than_pivot = []
    pivot_value = values[0]
    for value in values[1:]:
        if value <= pivot_value:
            less_than_pivot.append(value)
        else:
            greater_than_pivot.append(value)

    print("%55s %3s %-55s" % (less_than_pivot, pivot_value, greater_than_pivot))
    return quicksort(less_than_pivot) + [pivot_value] + quicksort(greater_than_pivot)


numbers = [1, 2, 2, 524, 52, 62, 6673, 62, 622, 36, 63, 673, 23, 252, 62]
sorted_values = quicksort(numbers)
print(sorted_values)


"""
===> increasing speed
bogo sort => selection sort => quick sort
"""
