{
  {
    // O(n^2) time | O(1) space
    function largestRectangleUnderSkyline(buildings: number[]) {
      let max = 0;
      for (let i = 0; i < buildings.length; i++) {
        let count = 1;
        for (let left = i - 1; left >= 0; left--) {
          if (buildings[left] < buildings[i]) break;
          count += 1;
        }
        for (let right = i + 1; right < buildings.length; right++) {
          if (buildings[right] < buildings[i]) break;
          count += 1;
        }
        max = Math.max(max, count * buildings[i]);
      }
      return max;
    }
  }
  {
    // O(n^2) time | O(1) space
    function largestRectangleUnderSkyline(buildings: number[]) {
      let max = 0;
      for (let i = 0; i < buildings.length; i++) {
        let widthSum = 1;
        const currHeight = buildings[i];
        for (let leftIdx = i - 1; leftIdx >= 0; leftIdx--) {
          if (buildings[leftIdx] < currHeight) break;
          widthSum += 1;
        }
        for (let rightIdx = i + 1; rightIdx < buildings.length; rightIdx++) {
          if (buildings[rightIdx] < currHeight) break;
          widthSum += 1;
        }
        max = Math.max(max, widthSum * currHeight);
      }
      return max;
    }
  }
}


export const __ = '__';
