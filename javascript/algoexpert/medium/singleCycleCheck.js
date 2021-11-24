// O(n) time, O(1) space
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  const START_INDEX = 0;
  let currentIdx = START_INDEX;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx == START_INDEX) {
      return false;
    }
    numElementsVisited += 1;
    currentIdx = getNextIdx(currentIdx, array);
  }
  return currentIdx === START_INDEX;
}

function getNextIdx(currentIdx, array) {
  const jumpValue = array[currentIdx];
  const nextIdx = (currentIdx + jumpValue) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
