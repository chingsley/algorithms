// O(nlog(n)) time | O(1) space
export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let tall: number[];
  let short: number[];
	
	if(redShirtHeights[0] > blueShirtHeights[0]) {
		tall =  redShirtHeights;
    short = blueShirtHeights;
	} else if(blueShirtHeights[0] > redShirtHeights[0]) {
    tall = blueShirtHeights;
    short = redShirtHeights;
  } else {
    return false;
  }
	

  for(let i = 0; i < tall.length; i++) {
    if(tall[i] <= short[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  classPhotos([1, 1, 1, 1, 1, 1, 1, 8],  [5, 6, 7, 2, 3, 2, 2, 3])
)