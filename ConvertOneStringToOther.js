let minWay = (str1, i = 0, str2, j = 0) => {
    if (str1.length === i) {
        return str2.length - j;
    }
    if (str2.length === j) {
        return str1.length - i;
    }

    if (str1[i] === str2[j]) {
        return minWay(str1, i + 1, str2, j + 1)
    } else {
        let removingChar = 1 + minWay(str1, i, str2, j + 1);
        let insertChar = 1 + minWay(str1, i + 1, str2, j);
        let replaceChar = 1 + minWay(str1, i + 1, str2, j + 1);

        return Math.min(Math.min(removingChar, insertChar), replaceChar);
    }
}