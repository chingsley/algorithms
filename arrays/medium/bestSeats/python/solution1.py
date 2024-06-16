# O(n) time | O(1) space
def bestSeat(seats):
    start, end = 0, -1
    i = 0
    while(i < len(seats)):
        if seats[i] == 0:
            j = i
            while(j < len(seats) and seats[j] == 0):
                if ((j - i) > (end - start)):
                    start, end = [i, j]
                j += 1
                
            i = j + 1
        else:
            i = i + 1
            
    return (start + end) // 2
