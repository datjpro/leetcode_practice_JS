//const ages = [12, 19, 25, 17, 30, 15, 22];

// Yêu cầu: Viết code ở đây để tạo ra mảng adults(>= 18)
// const adults = ...

// Kết quả mong muốn: [19, 25, 30, 22]

var filter = function (arr, fn) {
  const adults = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      adults.push(arr[i]);
    }
  }
  return adults;
};

const ages = [12, 19, 25, 17, 30, 15, 22];

// Sử dụng Filter để chọn ra những người >= 18 tuổi
const adults = ages.filter((age) => age >= 18);

// Kết quả mong muốn: [19, 25, 30, 22]

console.log("Mảng gốc (ages):", ages);
console.log("Mảng đã lọc (adults):", adults);
