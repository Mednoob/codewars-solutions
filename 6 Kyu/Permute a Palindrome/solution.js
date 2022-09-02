function permuteAPalindrome (input) { 
    const letters = input.split("").reduce((p, c) => {
        p[c] = ~~p[c] + 1;

        return p;
    }, {});

    let onefound = false;

    for (const val of Object.values(letters)) {
        if (val % 2) {
            if (onefound) return false;
            onefound = true;
        }
    }

    return true;
}
