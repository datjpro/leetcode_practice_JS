//Yêu cầu: Hãy viết hàm hoặc đoạn mã để tìm tiền tố chung dài nhất (Longest Common Prefix - LCP) cho mảng chuỗi sau.
//Ví dụ:
//Input: strs = ["international", "interstate", "interview", "intertwine"]

function LCP(strs) {
  if (!strs || strs.lenght === 0) return "";
  prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      if (prefix.length == 0) return "";
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}
