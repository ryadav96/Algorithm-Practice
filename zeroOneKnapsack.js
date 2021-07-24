let zeroOneKnapsack = (weight, val, cap, i) => {
    if (cap <= 0 || weight.length <= i) {
        return 0;
    }
    let pick = 0;
    if (weight[i] <= cap) {
        pick = val[i] + zeroOneKnapsack(weight, val, cap - weight[i], i + 1);

    }
    let dontPick = zeroOneKnapsack(weight, val, cap, i + 1);

    return Math.max(pick, dontPick);
}