{
  {
    // O(n) time | O(n) space (n = length of heights array)
    function waterArea(heights: number[]) {
      const maxLefts = new Array(heights.length).fill(0);
      const maxRights = new Array(heights.length).fill(0);
      const sufaceAreas = new Array(heights.length).fill(0);

      let [currMaxLeft, currMaxRight] = [0, 0];
      for (let [i, j] = [0, heights.length - 1]; i < heights.length; [i, j] = [i + 1, j - 1]) {
        maxLefts[i] = currMaxLeft;
        maxRights[j] = currMaxRight;
        currMaxLeft = Math.max(currMaxLeft, heights[i]);
        currMaxRight = Math.max(currMaxRight, heights[j]);
      }

      for (let i = 0; i < sufaceAreas.length; i++) {
        sufaceAreas[i] = Math.min(maxLefts[i], maxRights[i]) - heights[i];
        sufaceAreas[i] = Math.max(sufaceAreas[i], 0);
      }

      return sufaceAreas.reduce((sum, val) => sum + val, 0);
    }
  }
}

export const __ = '__';