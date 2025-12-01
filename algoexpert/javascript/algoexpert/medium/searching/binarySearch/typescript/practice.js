{
    {
        // O(log(n)) time (n = no. of items in the array)
        // O(n) space (the .map creates a new array, same length as n)
        function binarySearch(array, target) {
            return performBinSearch(array.map((value, idx) => ({ value, idx })), target);
        }
        function performBinSearch(array, target) {
            if (array.length === 0)
                return -1;
            const midIdx = Math.floor((array.length - 1) / 2);
            // console.log({ midIdx })
            if (target < array[midIdx].value) {
                return performBinSearch(array.slice(0, midIdx), target);
            }
            else if (target > array[midIdx].value) {
                return performBinSearch(array.slice(midIdx + 1, array.length), target);
            }
            else {
                return array[midIdx].idx;
            }
        }
    }
    {
        // O(log(n)) time | O(1) space
        function binarySearch(array, target) {
            let [i, j] = [0, array.length - 1];
            while (i <= j) {
                const m = Math.floor((i + j) / 2);
                if (array[m] === target) {
                    return m;
                }
                else if (target < array[m]) {
                    j = m - 1;
                }
                else {
                    i = m + 1;
                }
            }
            return -1;
        }
    }
    {
        // O(log(n)) time | O(1) space
        function binarySearch(array, target) {
            let [left, right] = [0, array.length - 1];
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (array[mid] === target) {
                    return mid;
                }
                else if (target < array[mid]) {
                    right = mid - 1;
                }
                else {
                    left = mid + 1;
                }
            }
            return -1;
        }
    }
    {
        // O(log(n)) time | O(log(n)) space
        function binarySearch(array, target) {
            return searchInRange([0, array.length - 1], array, target);
        }
        function searchInRange([startIdx, endIdx], array, target) {
            if (startIdx > endIdx)
                return -1;
            const midIdx = Math.floor((startIdx + endIdx) / 2);
            if (array[midIdx] === target)
                return midIdx;
            if (target < array[midIdx])
                return searchInRange([startIdx, midIdx - 1], array, target);
            return searchInRange([midIdx + 1, endIdx], array, target);
        }
    }
    {
        // O(log(n)) time | O(1) sapce
        function binarySearch(array, target) {
            let [leftIdx, rightIdx] = [0, array.length - 1];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                if (target === array[midIdx]) {
                    return midIdx;
                }
                else if (target < array[midIdx]) {
                    rightIdx = midIdx - 1;
                }
                else {
                    leftIdx = midIdx + 1;
                }
            }
            return -1;
        }
    }
    {
        // O(log(n)) time | O(1) space
        function binarySearch(array, target) {
            let [leftIdx, rightIdx] = [0, array.length - 1];
            while (leftIdx <= rightIdx) {
                const midIdx = Math.floor((leftIdx + rightIdx) / 2);
                if (array[midIdx] === target) {
                    return midIdx;
                }
                else if (target < array[midIdx]) {
                    rightIdx = midIdx - 1;
                }
                else {
                    leftIdx = midIdx + 1;
                }
            }
            return -1;
        }
    }
    {
        // O(log(n)) time | O(1) space
        function binarySearch(array, target) {
            let [startIdx, endIdx] = [0, array.length - 1];
            while (startIdx <= endIdx) {
                const midIdx = Math.floor((startIdx + endIdx) / 2);
                if (array[midIdx] === target)
                    return midIdx;
                target < array[midIdx] ? endIdx = midIdx - 1 : startIdx = midIdx + 1;
            }
            return -1;
        }
    }
}
export const __ = '__';
