class User {
    constructor() {
        this.progress = 0;
        this.rank = -8;
    }

    incProgress(act) {
        if (![-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8].includes(act)) throw new Error("Invalid rank value");
        if (this.rank === 8) return;
        if (act < (this.rank === 1 ? -1 : this.rank - 1)) return;

        let dist = Math.abs(act - this.rank);
        if (this.rank < 0 && act > 0) dist -= 1;

        let num = this.progress + (act > this.rank ? 10 * dist**2 : dist === 0 ? 3 : 1);
        while (this.rank < 8 && num >= 100) {
            ++this.rank;
            if (this.rank === 0) this.rank = 1;

            num -= 100;
        }

        this.progress = this.rank === 8 ? 0 : num;
    }
}
