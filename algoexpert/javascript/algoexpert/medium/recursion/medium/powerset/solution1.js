export function powerset(array) {
    let set = [[]];
    for (const i of array) {
        const newSet = [];
        for (const arr of set) {
            newSet.push([...arr, i]);
        }
        set = [...set, ...newSet];
    }
    return set;
}
