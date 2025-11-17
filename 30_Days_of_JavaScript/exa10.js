/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let called = undefined;
  return function (...args) {
    if (called != undefined) {
      // Nếu đã gọi, chỉ return (trả về undefined ngầm định)
      return;
    }
    const calls = fn(...args);
    called = calls;
    return calls;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
