const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.floor(a / b)
}

function postfixEvaluator(string) {
    const stack = [];

    for (let s of string.split(" ")) {
        if (!isNaN(s)) stack.push(+s);
        else {
            const second = stack.pop();
            stack.push(operators[s](stack.pop(), second));
        }
    }

    return stack[0];
}
