function determinant(m) {
    if (m.length === 1) return m[0][0];

    let res = 0;

    for (let n = 0; n < m.length; n++) {
        const arr = m
          .slice(1)
          .map(a => a.slice(0, n).concat(a.slice(n + 1, a.length)));

        res += Math.pow(-1, 2 + n) * m[0][n] * determinant(arr);
    }

    return res;
}
