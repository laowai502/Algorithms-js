const arr = [5, 3, 7, 6, 2, 9, 100, 33, 55, 1];
console.log(quickSort(arr));

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivotIndex = Math.floor(arr.length / 2);
        let pivot = arr.splice(pivotIndex, 1)[0]; // 取中间点为基点时间复杂度最优
    
        // let pivot = [0];
    
        let left = [];
        let right = [];
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        // console.log('left: ', left);
        // console.log('right: ', right);
        return quickSort(left).concat([pivot], quickSort(right));
    }
}

// 快速排序是一种分而治之的算法。快速排序首先将一个大数组分成两个较小的子数组：比某个数小的元素和比某个数大的元素。然后快速排序可以递归地对子数组进行排序。

/**
 * 步骤是:
 *      1. 从数组中选择一个元素，称为基点
 *      2. 分区：对数组重新排序，使所有值小于基点的元素都在它左边，而所有值大于基点的元素都在它右边（相等的值可以放在任何一边）。在此分区之后，基点处于其最终位置（左边和右边的中间位置）。这称为分区操作。
 *      3. 递归地将上述步骤应用于左边的数组和右边的数组。
 */

// O(nlogN) => O(n^2)
// O(logN) => O(n)