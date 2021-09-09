def selection_sort(values):
    sorted_list = []
    print("%-25s %-25s" % (values, sorted_list))
    for i in range(0, len(values)):
        index_to_move = get_index_of_min(values)
        sorted_list.append(values.pop(index_to_move))
        print("%-25s %-25s" % (values, sorted_list))
    return sorted_list


def get_index_of_min(values):
    min_index = 0
    for i in range(1, len(values)):
        if values[i] < values[min_index]:
            min_index = i
    return min_index


selection_sort([8, 2, 5, 7, 1, 9, 34, 6, 35, 7, 5, 7])
