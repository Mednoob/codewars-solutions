function getLengthOfMissingArray(arr) {
    if (!(arr || []).length) return 0;

    const ind = arr.findIndex(x => x === null || !x.length);
    if (ind !== -1) return 0;

    arr.sort((a, b) => a.length - b.length);
    const start = arr[0].length;

    for (let n = 1; n < arr.length; n++) {
        if (arr[n].length !== start + n) return start + n;
    }
}
