function removeZeros(array) {
    let zeroRow = array.length;
    for (let n = 0; n < array.length; n++) {
        if (![0, "0"].includes(array[n])) continue;
        if (n === zeroRow) break;
  
        for (let x = n; x < array.length - 1; x++) {
            [array[x], array[x + 1]] = [array[x + 1], array[x]];
        }
  
        --zeroRow;
  
        if ([0, "0"].includes(array[n])) --n;
    }
  
    return array;
}