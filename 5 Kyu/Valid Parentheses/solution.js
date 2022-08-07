function validParentheses(parens) {
    let expected = 0;

    for (const paren of parens.split("")) {
        if (paren === "(") expected++;
        else if (paren === ")") {
            if (expected < 1) return false;
            expected--;
        };
    }

    return expected === 0;
}