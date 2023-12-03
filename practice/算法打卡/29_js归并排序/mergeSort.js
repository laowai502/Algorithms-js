let array = [4, 2, 5, 1, 6, 3, 88, 2];
console.log("Sorted array is:", mergeSort(array));

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    // console.log("left: ", left);
    // console.log("right: ", right);
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    // console.log("result: ", result);

    return result;
}

// O(nlogN) O(n)