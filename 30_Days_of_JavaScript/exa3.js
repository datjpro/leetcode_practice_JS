/**
 * @param {any} val - Giá trị thực tế cần được kiểm tra
 * @return {Object} - Đối tượng chứa các hàm kiểm thử
 */
var expect = function (val) {
  // Hàm expect trả về một đối tượng chứa hai phương thức
  return {
    /**
     * Phương thức toBe(otherVal)
     * Kiểm tra xem val === otherVal không
     */
    toBe: function (otherVal) {
      // So sánh nghiêm ngặt (===)
      if (val === otherVal) {
        return true;
      } else {
        // Nếu không bằng nhau, ném lỗi
        throw new Error("Not Equal");
      }
    },

    /**
     * Phương thức notToBe(otherVal)
     * Kiểm tra xem val !== otherVal không
     */
    notToBe: function (otherVal) {
      // So sánh khác nghiêm ngặt (!==)
      if (val !== otherVal) {
        return true;
      } else {
        // Nếu bằng nhau, ném lỗi
        throw new Error("Equal");
      }
    },
  };
};

/* Ví dụ về cách sử dụng (Không bắt buộc trong lời giải, nhưng giúp kiểm tra)
try {
    console.log(expect(5).toBe(5));       // Output: true
    // console.log(expect(5).toBe(6));    // Sẽ ném lỗi: "Not Equal"
    console.log(expect(5).notToBe(10));   // Output: true
    // console.log(expect(5).notToBe(5)); // Sẽ ném lỗi: "Equal"
} catch (e) {
    console.error("Lỗi kiểm thử:", e.message);
}
*/
