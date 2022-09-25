const zReg = /^0+(\d+)$/

function isLess(a, b) {
    a = a.replace(zReg, "$1");
    b = b.replace(zReg, "$1");

    if (a.length > b.length) return false;
    if (a.length < b.length) return true;

    return a.localeCompare(b) < 1;
}

function subtract(a, b)
{
    const negative = isLess(a, b);
    if (negative) [a, b] = [b, a];

    let res = "";
    let temp = 0;

    for (let x = 1; x <= Math.max(a.length, b.length); x++) {
        let num = ~~a[a.length - x] - ~~b[b.length - x] - temp;
        if (num < 0) {
            temp = 1;
            num += 10;
        } else {
            temp = 0;
        }

        res = `${num}${res}`;
    }

    res = res.replace(zReg, "$1");
    return `${negative && res != "0" ? "-" : ""}${res}`;
}
