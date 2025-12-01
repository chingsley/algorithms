// O(n) time | O(n) space (n = lenght of heights array)
export function waterArea(heights: number[]) {
  const maxLeft = new Array(heights.length).fill(0);
  const maxRight = new Array(heights.length).fill(0);
  const surfaceAreas = new Array(heights.length).fill(0);

  let currentMaxLeft = 0;
  for (let i = 0; i < maxLeft.length; i++) {
    maxLeft[i] = currentMaxLeft;
    if (heights[i] > currentMaxLeft) currentMaxLeft = heights[i];
  }

  let currentMaxRight = 0;
  for (let i = maxRight.length - 1; i >= 0; i--) {
    maxRight[i] = currentMaxRight;
    if (heights[i] > currentMaxRight) currentMaxRight = heights[i];
  }

  for (let i = 0; i < surfaceAreas.length; i++) {
    if (maxLeft[i] === 0 || maxRight[i] === 0) {
      surfaceAreas[i] = 0;
    } else {
      surfaceAreas[i] = Math.min(maxLeft[i], maxRight[i]) - heights[i];
      surfaceAreas[i] = Math.max(surfaceAreas[i], 0);
    }
  }

  return surfaceAreas.reduce((sum, val) => sum + val, 0);
}