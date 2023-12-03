const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // ordered array
const target = 7;

console.log(binarySearch(array, target)); // 输出：6

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        const middleVal = array[middle];
        if (middleVal === target) {
            return middle;
        } else if (middleVal < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// O(logN) O(1)