let longestCommonSubsequence = (s1, s2, i1 = 0, i2 = 0) => {
    if (i1 >= s1.length || i2 >= s2.length) {
        return 0;
    }

    if (s1[i1] === s2[i2]) {
        return 1 + longestCommonSubsequence(s1, s2, i1 + 1, i2 + 1);
    } else {
        let select1 = longestCommonSubsequence(s1, s2, i1 + 1, i2);
        let select2 = longestCommonSubsequence(s1, s2, i1, i2 + 1);
        let dontSelect = longestCommonSubsequence(s1, s2, i1 + 1, i2 + 1);
        return Math.max(Math.max(select1, select2), dontSelect);
    }
}