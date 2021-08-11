def recursive_bin_search(list, target):
    """
    returns 'True' if target is found
    else, it returns 'False'
    """
    if len(list) == 0:
        return False
    else:
        midpoint = (len(list)) // 2
        if list[midpoint] == target:
            return True
        else:
            if target < list[midpoint]:
                return recursive_bin_search(list[:midpoint], target)
            else:
                return recursive_bin_search(list[midpoint+1:], target)


my_list = [1, 2, 3, 4, 5]

print(recursive_bin_search(my_list, 5))
print(recursive_bin_search(my_list, 6))
