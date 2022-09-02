function zeros (n) {
    let res = 0;
    let pow = 1;

    while (Math.pow(5, pow) <= n) {
        res += Math.floor(n / Math.pow(5, pow));
        ++pow;
    }

    return res;
}
