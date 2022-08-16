function amountOfPages(summary){
    let str = "";
    let n = 1;

    while (str.length < summary) {
        str += `${n}`;
        ++n;
    }

    return n - 1;
}
