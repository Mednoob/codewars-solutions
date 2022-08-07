function solution(input, markers) {
    let comment = false;

    return input.split("").reduce((p, c) => {
        if (c === "\n") {
            comment = false;
        } else if (markers.includes(c) || comment) {
            comment = true;
            return p.trimEnd();
        }
  
        return p + c;
    }, "");
};