function add(a, b) {
    let res = "";
    let left = 0;

    for (let n = 1; n <= Math.max(a.length, b.length); n++) {
        const num = ~~a[a.length - n] + ~~b[b.length - n] + left;
        res = `${num % 10}${res}`;
        left = Math.floor(num / 10);
    }

    if (left) res = `${left}${res}`;
    return res;
}
