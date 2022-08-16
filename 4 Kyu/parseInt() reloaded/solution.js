const singles = {
    one       : 1,
    two       : 2,
    three     : 3,
    four      : 4,
    five      : 5,
    six       : 6,
    seven     : 7,
    eight     : 8,
    nine      : 9
}

const tens = {
    ten       : 10,
    eleven    : 11,
    twelve    : 12,
    thirteen  : 13,
    fourteen  : 14,
    fifteen   : 15,
    sixteen   : 16,
    seventeen : 17,
    eighteen  : 18,
    nineteen  : 19
}

const doubles = {
    twenty    : 20,
    thirty    : 30,
    forty     : 40,
    fifty     : 50,
    sixty     : 60,
    seventy   : 70,
    eighty    : 80,
    ninety    : 90
}

const closings = {
    thousand: 1000,
    million: 1000000
}

const reg = obj => Object.keys(obj).join("|");
const doubleReg = new RegExp(`^(${reg(doubles)})(-(${reg(singles)}))?$`);

function parseInt(string) {
    if (string === "zero") return 0;
    let res = 0;
    let temp = 0;

    for (const str of string.split(" ")) {
        if (str === "hundred") {
            temp *= 100;
        } else if (closings[str]) {
            res += temp * closings[str];
            temp = 0;
        } else if (doubleReg.test(str)) {
            const [_, a, __, b] = str.match(doubleReg);
  

            temp += doubles[a] + (singles[b] || 0);
        } else if (str !== "and") {
            temp += tens[str] || singles[str];
        }
    }

    return res + temp;
}
