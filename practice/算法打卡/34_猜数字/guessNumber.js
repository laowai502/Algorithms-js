/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
* @return -1 if num is higher than the picked number
*			      1 if num is lower than the picked number
*               otherwise return 0
* var guess = function(num) { }
*/

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1;
    let high = n;
    while (low <= high) {
        let middle = low + Math.floor((high - low) / 2);
        let pick = guess(middle);
        if (pick === 0) {
            return middle;
        } else if (pick < 0) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return -1;
};