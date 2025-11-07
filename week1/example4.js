/**
 * @param {string[]} strs
 * @return {string}
 */
//14. Longest Common Prefix
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      if (prefix.length === 0) {
        return "";
      }
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};
