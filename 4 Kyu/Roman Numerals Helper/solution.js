const RomanNumerals = {
    base: {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    },
    toRoman(num) {
        let res = "";
        let left = num;

        for (let k in this.base) {
            const num = this.base[k];
            const divide = Math.floor(left / num);

            if (divide) res += k.repeat(divide);
            left %= num;
        }

        return res;
    },
    fromRoman(str) {
        let res = 0;
        let last = 0;

        for (let n = str.length - 1; n >= 0; n--) {
            const num = this.base[str[n]];

            if (num < last) res -= num;
            else res += num;

            last = num;
        }

        return res;
    }
}