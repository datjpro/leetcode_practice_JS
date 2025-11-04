/**
 * @param {number} x
 * @return {boolean}
 */
//Cho một số nguyên x, trả về true nếu xlà một xuôi ngược đều giống nhau và false ngược lại .
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  } else {
    //chuyen thanh string
    const z = x.toString();

    //tach thanh mang ky tu, đảo ngược, ghép lại
    const y = z.split("").reverse().join("");

    if (z == y) {
      return true;
    }
    return false;
  }
};

//test case
console.log(isPalindrome(121));
