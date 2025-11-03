/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();
  // gán giá trị index cho các số

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const complement = target - currentNum;

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(currentNum, i);
  }
  return [];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
