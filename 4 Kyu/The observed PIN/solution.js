const adjacents = {
    "1": ["1", "2", "4"],
    "2": ["1", "2", "3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3", "5", "6", "9"],
    "7": ["4", "7", "8"],
    "8": ["5", "7", "8", "9", "0"],
    "9": ["6", "8", "9"],
    "0": ["8", "0"]
}

function getPINs(observed) {
    const res = [...adjacents[observed[0]]];

    for (let n = 1; n < observed.length; n++) {
        const temp = [];

        for (const adj of adjacents[observed[n]]) {
            temp.push(...res.map(x => x + adj));
        }

        res.splice(0, res.length, ...temp);
    }

    return res;
}
