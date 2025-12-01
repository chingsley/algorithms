import java.util.*;

class Program {
  // O(n) time | O(1) space
  public int bestSeat(int[] seats) {
    int start = 0, end = -1, i = 0;
    while(i < seats.length)  {
        if (seats[i] != 0) {
            i += 1;
            continue;
        }
        
        int j = i;
        while(j < seats.length && seats[j] == 0) {
            if ((j - i) > (end - start)) {
                start = i;
                end = j;
             }
            j += 1;
         }
         i = j + 1;
      }

    return Math.floorDiv((start + end), 2);
  }
}