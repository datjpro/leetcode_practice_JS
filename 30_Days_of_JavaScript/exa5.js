/**
 * @param {number[]} arr
 * @param {Function} fn - Hàm để áp dụng cho từng phần tử
 * @return {number[]}
 */
//2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = fn(arr[i], i);
        newArr.push(result);
    }
    return newArr;
};