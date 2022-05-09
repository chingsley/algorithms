// O(nlog(n)) time | O(1) space
export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
	
	if(redShirtHeights[0] === blueShirtHeights[0]) {
		return false;
	}
	
	const diff = redShirtHeights[0] - blueShirtHeights[0];
	const absDiff = Math.abs(diff);
	const expected = diff / absDiff

  for(let i = 0; i < redShirtHeights.length; i++) {
    const r = redShirtHeights[i];
    const b = blueShirtHeights[i];
		const received = (r - b) / Math.abs(r - b);
    // console.log({ expected, received, r, b })

    if(expected !== received) {
      return false;
    }
  }
  return true;
}


console.log(
  classPhotos([1, 1, 1, 1, 1, 1, 1, 8],  [5, 6, 7, 2, 3, 2, 2, 3])
)