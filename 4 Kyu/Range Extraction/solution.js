function solution(list){
    const res = [];

    for (let n = 0; n < list.length; n++) {
        let x = n;

        while (x < list.length - 1 && list[x + 1] === list[x] + 1) ++x;

        const nums = list.slice(n, x + 1);
        if (nums.length > 2) {
            res.push(`${nums[0]}-${nums[nums.length - 1]}`);
        } else {
            res.push(...nums);
        }

        n += x - n;
    }

    return res.join(",");
}
