/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1. Khởi tạo Hash Map (trong JS dùng Map hoặc Object)
  // Key: Số cần tìm (complement), Value: Chỉ số (index) của số đó
  const numMap = new Map();

  // 2. Duyệt qua mảng chỉ 1 lần
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // 3. Tính toán số đối tác cần tìm
    const complement = target - currentNum;

    // 4. Kiểm tra trong Hash Map (Thao tác O(1))
    if (numMap.has(complement)) {
      // Nếu complement đã được lưu trước đó, ta tìm thấy cặp số!
      // numMap.get(complement) sẽ trả về index của complement
      return [numMap.get(complement), i];
    }

    // 5. Nếu chưa tìm thấy, lưu số hiện tại và index của nó vào Map
    // Lưu {currentNum: i} để dùng cho các lần duyệt sau
    numMap.set(currentNum, i);
  }

  // Theo đề bài, luôn có giải pháp duy nhất.
  return [];
};

// Ví dụ chạy: nums = [2, 7, 11, 15], target = 9
// i=0, num=2: complement=7. Map không có 7. -> Lưu {2: 0}
// i=1, num=7: complement=2. Map CÓ 2! -> Trả về [Map.get(2), 1] = [0, 1]

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]
