function rgb(r, g, b){
    let res = "";
    for (let n of [r,g,b]) {
        const first = n < 0 ? 0 : Math.min(n / 16, 15.9375);
        const second = (first % 1) * 16;
        res += Math.floor(first).toString(16) + second.toString(16);
    }
    return res.toUpperCase();
}