/**
 * @param {Function[]} functions
 * @return {Function}
 */

//2629. Function Composition

var compose = function (functions) {
  return function (x) {
    if (functions.length == 0) {
      return x;
    }
    return functions.reduceRight((acc, fn) => fn(acc) ,x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
