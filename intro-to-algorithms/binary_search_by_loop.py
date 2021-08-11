def b_search(arr, target):
    """
    returns index of the 'target' item if found,
    else it returns 'target not found'
    """
    ifirst = 0
    ilast = len(arr) - 1

    while ifirst <= ilast:
        imid = (ifirst + ilast)//2

        if arr[imid] == target:
            return imid
        elif target > arr[imid]:
            ifirst = imid + 1
        else:
            ilast = imid - 1
    return 'target not found'


my_list = [1, 2, 3, 4, 5]

print(b_search(my_list, 5))
print(b_search(my_list, 6))
