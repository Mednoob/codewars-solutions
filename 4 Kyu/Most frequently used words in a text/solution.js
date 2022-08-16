function topThreeWords(text) {
    const obj = text.split(/[^a-z']/i)
        .filter(x => x.match(/[a-z]/i))
        .reduce((p, c) => {
            p[c.toLowerCase()] = ~~p[c.toLowerCase()] + 1;

            return p;
        }, {});

    return Object.entries(obj).sort(([_, a], [__, b]) => b - a)
        .slice(0, 3)
        .map(([x]) => x);
}
