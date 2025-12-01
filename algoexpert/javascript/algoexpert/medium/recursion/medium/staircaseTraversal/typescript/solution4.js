/**
 * O(n) time | O(n) space
 * n = height of the staircase
 */
export function staircaseTraversal(height, maxSteps) {
    let currentNumberOfWays = 0;
    const waysToTop = [1];
    for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
        const startWindow = currentHeight - maxSteps - 1;
        const endWindow = currentHeight - 1;
        if (startWindow >= 0) {
            currentNumberOfWays -= waysToTop[startWindow];
        }
        currentNumberOfWays += waysToTop[endWindow];
        waysToTop.push(currentNumberOfWays);
    }
    return waysToTop[height];
}
