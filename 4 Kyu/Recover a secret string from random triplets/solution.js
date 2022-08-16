function recoverSecret(triplets) {
    const res = [];

    for (const triplet of triplets) {
        let last = -1;
        for (const t of triplet) {
            const ind = res.indexOf(t);
            if (ind <= last) {
                res.splice(last + 1, 0, t);
                if (ind >= 0) res.splice(ind, 1);
                last += 1
            } else {
                last = ind;
            }
        }
    }

    return res.join("");
}
