function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

let array = [12, 11, 13, 5, 6];
console.log("Sorted array is:", insertionSort(array));

// O(n^2) O(1)