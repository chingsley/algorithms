def merge_sort(values):
    """
    worst case: O(n log n)
    """
    if len(values) <= 1:
        return values

    # split and recurse
    middle_index = len(values) // 2
    print("%55s %5s" % (values, middle_index))
    left_values = merge_sort(values[:middle_index])
    right_values = merge_sort(values[middle_index:])

    # merging...
    sorted_values = []
    left_index = 0
    right_index = 0
    while left_index < len(left_values) and right_index < len(right_values):
        if left_values[left_index] < right_values[right_index]:
            sorted_values.append(left_values[left_index])
            left_index += 1
        else:
            sorted_values.append(right_values[right_index])
            right_index += 1

    # copy any remaining items from either left or right values
    sorted_values += left_values[left_index:]
    sorted_values += right_values[right_index:]
    return sorted_values


numbers = [1, 2, 2, 524, 52, 62, 6673, 62, 622, 36, 63, 673, 23, 252, 62]
sorted_values = merge_sort(numbers)
print(sorted_values)
