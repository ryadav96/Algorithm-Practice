let lpsubstring = (s, i, j) => {
    if (i > j) return 0;
    if (i === j) {
        return 1;
    }
    let c1 = 0;
    if (s[i] === s[j]) {
        let rmLength = j - i - 1;
        if (rmLength === lpsubstring(s, i + 1, j - 1))
            c1 = 2 + rmLength;
    }
    let c2 = lpsubstring(s, i + 1, j);
    let c3 = lpsubstring(s, i, j - 1);

    return Math.max(Math.max(c1, c2), c3);
}