{
    {
        function searchForRange(array, target) {
            const result = [-1, -1];
            let [i, j] = [0, array.length - 1];
            while (i <= j) {
                const mid = Math.floor((i + j) / 2);
                if (array[mid] === target && mid === 0) {
                    result[0] = mid;
                    break;
                }
                else if (array[mid] === target && array[mid - 1] !== target) {
                    result[0] = mid;
                    break;
                }
                else if (array[mid] < target) {
                    i = mid + 1;
                }
                else {
                    j = mid - 1;
                }
            }
            if (result[0] < 0)
                return result;
            [i, j] = [result[0], array.length - 1];
            while (i <= j) {
                const mid = Math.floor((i + j) / 2);
                if (array[mid] === target && mid === array.length - 1) {
                    result[1] = mid;
                    break;
                }
                else if (array[mid] === target && array[mid + 1] !== target) {
                    result[1] = mid;
                    break;
                }
                else if (array[mid] > target) {
                    j = mid - 1;
                }
                else {
                    i = mid + 1;
                }
            }
            return result;
        }
    }
    {
        let Position;
        (function (Position) {
            Position["Start"] = "START";
            Position["End"] = "END";
        })(Position || (Position = {}));
        // O(log(n)) time | O(1) space
        function searchForRange(array, target) {
            const start = getIndex(Position.Start, 0, array.length - 1, array, target);
            const end = getIndex(Position.End, 0, array.length - 1, array, target);
            return [start, end];
        }
        function getIndex(iPos, startIdx, endIdx, array, target) {
            let [leftIdx, rightIdx] = [startIdx, endIdx];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                if (target < array[midIdx]) {
                    rightIdx = midIdx - 1;
                }
                else if (target > array[midIdx]) {
                    leftIdx = midIdx + 1;
                }
                else {
                    if (iPos === Position.Start) {
                        if (midIdx === 0 || array[midIdx - 1] !== target) {
                            return midIdx;
                        }
                        else {
                            rightIdx = midIdx - 1;
                        }
                    }
                    else {
                        if (midIdx === array.length - 1 || array[midIdx + 1] !== target) {
                            return midIdx;
                        }
                        else {
                            leftIdx = midIdx + 1;
                        }
                    }
                }
            }
            return -1;
        }
    }
    {
        let Position;
        (function (Position) {
            Position["Start"] = "START";
            Position["End"] = "END";
        })(Position || (Position = {}));
        // O(log(n)) time | O(1) space
        function searchForRange(array, target) {
            const startIdx = getIndex(Position.Start, array, target);
            const endIdx = getIndex(Position.End, array, target);
            return [startIdx, endIdx];
        }
        function getIndex(pos, array, target) {
            let [leftIdx, rightIdx] = [0, array.length - 1];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                if (target < array[midIdx]) {
                    rightIdx = midIdx - 1;
                }
                else if (target > array[midIdx]) {
                    leftIdx = midIdx + 1;
                }
                else {
                    if (pos === Position.Start) {
                        if (midIdx === 0 || array[midIdx - 1] !== target) {
                            return midIdx;
                        }
                        else {
                            rightIdx = midIdx - 1;
                        }
                    }
                    else {
                        if (midIdx === array.length - 1 || array[midIdx + 1] !== target) {
                            return midIdx;
                        }
                        else {
                            leftIdx = midIdx + 1;
                        }
                    }
                }
            }
            return -1;
        }
    }
    {
        let Direction;
        (function (Direction) {
            Direction["Left"] = "LEFT";
            Direction["Right"] = "RIGHT";
        })(Direction || (Direction = {}));
        ;
        // O(log(n)) time | O(1) space
        function searchForRange(array, target) {
            const left = searchForEnd(Direction.Left, array, target);
            const right = searchForEnd(Direction.Right, array, target);
            return [left, right];
        }
        function searchForEnd(direction, array, target) {
            let [leftIdx, rightIdx] = [0, array.length - 1];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                if (target < array[midIdx]) {
                    rightIdx = midIdx - 1;
                }
                else if (target > array[midIdx]) {
                    leftIdx = midIdx + 1;
                }
                else {
                    if (direction === Direction.Left) {
                        if (midIdx === 0) {
                            return midIdx;
                        }
                        else if (array[midIdx - 1] < target) {
                            return midIdx;
                        }
                        else {
                            rightIdx = midIdx - 1;
                        }
                    }
                    else {
                        if (midIdx === array.length - 1) {
                            return midIdx;
                        }
                        else if (array[midIdx + 1] > target) {
                            return midIdx;
                        }
                        else {
                            leftIdx = midIdx + 1;
                        }
                    }
                }
            }
            return -1;
        }
    }
    {
        let Bound;
        (function (Bound) {
            Bound["Start"] = "START";
            Bound["End"] = "END";
        })(Bound || (Bound = {}));
        // O(log(n)) time | O(1) space
        function searchForRange(array, target) {
            const startIdx = searchBoundIdx(array, target, Bound.Start);
            const endIdx = searchBoundIdx(array, target, Bound.End);
            return [startIdx, endIdx];
        }
        function searchBoundIdx(array, target, type) {
            let [startIdx, endIdx] = [0, array.length - 1];
            while (startIdx <= endIdx) {
                const midIdx = Math.floor((startIdx + endIdx) / 2);
                if (array[midIdx] > target) {
                    endIdx = midIdx - 1;
                }
                else if (array[midIdx] < target) {
                    startIdx = midIdx + 1;
                }
                else {
                    if (type === Bound.Start) {
                        if (midIdx === 0)
                            return midIdx;
                        if (array[midIdx - 1] !== target)
                            return midIdx;
                        endIdx = midIdx - 1;
                    }
                    else {
                        if (midIdx === array.length - 1)
                            return midIdx;
                        if (array[midIdx + 1] !== target)
                            return midIdx;
                        startIdx = midIdx + 1;
                    }
                }
            }
            return -1;
        }
    }
}
export const __ = '__';
