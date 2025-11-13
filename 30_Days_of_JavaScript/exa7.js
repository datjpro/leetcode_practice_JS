/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
//2626. Array Reduce Transformation
var reduce = function (nums, fn, init) {
  var result = [];
  result = nums.reduce(fn, init);

  return result;
};
