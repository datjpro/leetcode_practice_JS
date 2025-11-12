//const prices = [100, 50, 200, 75, 120];

// Yêu cầu: Viết code ở đây để tạo ra mảng discountedPrices(giảm giá 10%)
// const discountedPrices = ...

// Kết quả mong muốn: [90, 45, 180, 67.5, 108]

var map = function (arr, fn) {
  const discountedPrices = [];
  for (let i = 0; i < arr.length; i++) {
    const test = fn(arr[i], i);
    discountedPrices.push(test);
  }
  return discountedPrices;
};
const prices = [100, 50, 200, 75, 120];

// Sử dụng Map để chuyển đổi giá tiền (giảm 10% = nhân với 0.9)
const discountedPrices = prices.map((price) => price * 0.9);

// Kết quả mong muốn: [90, 45, 180, 67.5, 108]

console.log("Mảng gốc (prices):", prices);
console.log("Mảng đã chuyển đổi (discountedPrices):", discountedPrices);
