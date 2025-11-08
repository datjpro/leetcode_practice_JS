/**
 * @param {string} s
 * @return {boolean}
 */
//20. Valid Parentheses
var isValid = function (s) {
  const stack = []; // Biến Stack riêng biệt
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      // Gặp dấu mở -> Push vào Stack
      stack.push(char);
    } else {
      // Gặp dấu đóng

      // 1. Nếu Stack rỗng (không có dấu mở để khớp)
      if (stack.length === 0) {
        return false;
      }

      // 2. Lấy dấu mở cuối cùng ra để so sánh
      const lastOpen = stack.pop();

      // 3. Kiểm tra xem dấu mở (lastOpen) có khớp với dấu đóng (char) không
      if (lastOpen !== map[char]) {
        return false; // Không khớp cặp
      }
    }
  }

  // Nếu duyệt xong chuỗi mà Stack trống, thì cân bằng
  return stack.length === 0;
};

console.log(isValid("("));