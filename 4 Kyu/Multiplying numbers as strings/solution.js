function sum(a, b) {
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

function multiply(n, o){
    let lanes = [];
    for (let x = n.length - 1; x >= 0; x--) {
        const sn = ~~n[x];
        let res = "";
        let left = 0;

        for (let y = o.length - 1; y >= 0; y--) {
            const num = sn * ~~o[y] + left;
            left = Math.floor(num / 10);
            res = `${num % 10}${res}`;
        }

        if (left) res = `${left}${res}`;
        lanes.push(res);
    }

    const str = lanes.reduce((p, c, i) => sum(p, c + "0".repeat(i)), "0");
    return str.replace(/^0*(\d+)$/, "$1");
}
