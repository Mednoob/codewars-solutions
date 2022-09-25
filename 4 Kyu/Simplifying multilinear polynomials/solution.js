function simplify(poly){
    const polynoms = {};

    poly.replace(/(\+|-)?(\d+)?([a-z]+)/g, (_, sign = "+", num = 1, pol) => {
        const sortedPol = pol.split("").sort().join("");
        polynoms[sortedPol] = ~~polynoms[sortedPol] + (sign === "+" ? 1 : -1) * +num;
    });

    return Object.entries(polynoms)
        .filter(([_, x]) => x)
        .sort(([a], [b]) => a.length === b.length ? a.localeCompare(b) : a.length - b.length)
        .map(([k, v], i) => {
            const abs = Math.abs(v);
            return `${v < 0 ? "-" : i === 0 ? "" : "+"}${abs === 1 ? "" : abs}${k}`;
        })
        .join("");
}
