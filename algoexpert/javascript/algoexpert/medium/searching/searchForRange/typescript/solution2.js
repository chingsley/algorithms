var Direction;
(function (Direction) {
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
;
// O(log(n)) time | O(1) space;
export function searchForRange(array, target) {
    const leftEnd = quickSearchTowards(Direction.Left, array, target);
    const rightEnd = quickSearchTowards(Direction.Right, array, target);
    return [leftEnd, rightEnd];
}
function quickSearchTowards(direction, array, target) {
    let [i, j] = [0, array.length - 1];
    while (i <= j) {
        const midIdx = Math.floor((i + j) / 2);
        if (array[midIdx] > target) {
            j = midIdx - 1;
        }
        else if (array[midIdx] < target) {
            i = midIdx + 1;
        }
        else {
            if (direction === Direction.Left) {
                if (array[midIdx - 1] !== target) {
                    return midIdx;
                }
                else {
                    j = midIdx - 1;
                }
            }
            else {
                if (array[midIdx + 1] !== target) {
                    return midIdx;
                }
                else {
                    i = midIdx + 1;
                }
            }
        }
    }
    return -1;
}
