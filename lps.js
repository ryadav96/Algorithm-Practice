let lps = (s, i = 0, j = 0) => {
    if (i > j) {
        return 0;
    }
    if (i === j) return 1;
    if (s[i] === s[j]) {
        return 2 + lps(s, i + 1, j - 1);
    }
    let leaveLeft = lps(s, i + 1, j);
    let leaveRight = lps(s, i, j - 1);

    return Math.max(leaveLeft, leaveRight);

}