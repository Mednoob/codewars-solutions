function towerBuilder(nFloors) {
    const longest = 1 + (2 * (nFloors - 1));
    const result = [];
  
    for (let n = (nFloors - 1); n >= 0; n--) {
        const space = " ".repeat(n);
        result.push(`${space}${"*".repeat(longest - (n * 2))}${space}`);
    }
  
    return result;
}
