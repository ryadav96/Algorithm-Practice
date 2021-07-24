function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = left + Math.floor((right - left) / 2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);

}

function merge(arr, l, m, r) {

    let leftArray = [];
    let rightArray = [];
    let leftArrayPointer = 0;
    let rightArrayPointer = 0;
    let inputArrayPointer = l;

    for (let i = l; i <= m; i++) {
        leftArray.push(arr[i]);
    }

    for (let i = m + 1; i <= r; i++) {
        rightArray.push(arr[i]);
    }

    while (leftArrayPointer < leftArray.length && rightArrayPointer < rightArray.length) {
        if (leftArray[leftArrayPointer] <= rightArray[rightArrayPointer]) {
            arr[inputArrayPointer++] = leftArray[leftArrayPointer++];
        } else if (rightArray[rightArrayPointer] < leftArray[leftArrayPointer]) {
            arr[inputArrayPointer++] = rightArray[rightArrayPointer++];
        }
    }

    while (leftArrayPointer < leftArray.length) {
        arr[inputArrayPointer++] = leftArray[leftArrayPointer++];
    }

    while (rightArrayPointer < rightArray.length) {
        arr[inputArrayPointer++] = rightArray[rightArrayPointer++];
    }

}

let x = ["f", "a", "b", "c", "d", "e"];
mergeSort(x, 0, x.length - 1);
console.log(x);
