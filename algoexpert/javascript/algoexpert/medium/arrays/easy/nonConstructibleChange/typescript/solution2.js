// O(nlog(n)) time | O(1) space
export function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let changeCreated = 0;
    for (let coin of coins) {
        const changeToBeCreated = changeCreated + 1;
        if (coin > changeToBeCreated) {
            return changeToBeCreated;
        }
        else {
            changeCreated += coin;
        }
    }
    return changeCreated + 1;
}
