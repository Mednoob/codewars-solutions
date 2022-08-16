function validSolution(board){
    for (let n = 0; n < 9; n += 3) {
        const rows = board.slice(n, n + 3);
        for (let m = 0; m < 9; m += 3) {
            const sub = rows.reduce((p, c) => {
                p.push(...c.slice(m, m + 3));

                return p;
            }, []);

            if (sub.includes(0) || ![1,2,3,4,5,6,7,8,9].every(x => sub.includes(x))) return false;
        }
    }

    return true;
}
