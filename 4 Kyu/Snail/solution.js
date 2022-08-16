function snail(array) {
    const dupe = [...array].map(x => [...x]);
    const res = [];

    while (dupe.length > 0) {
        res.push(...dupe.shift());

        for (let n = 0; n < dupe.length; n++) {
            res.push(dupe[n].pop());
        }

        res.push(...(dupe.pop() || []).reverse());

        for (let n = dupe.length - 1; n >= 0; n--) {
            res.push(dupe[n].shift())
        }
    }

    return res;
}
