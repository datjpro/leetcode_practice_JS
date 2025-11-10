/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
//2665. Counter II
var createCounter = function (init) {
  const x = init;
  let siu = init;
  return {
    increment: function () {
      siu++;
      return siu;
    },
    reset: function () {
      siu = x;
      return siu;
    },
    decrement: function () {
      siu--;
      return siu;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
