function regexVar(str) {
  // ^ => mục đầu tiên khớp:
  // () => lưu trữ giá trị khớp được bắt trong
  // [aeiou] => khớp với bất kỳ ký tự nào trong dấu ngoặc vuông
  //. => khớp với bất kỳ ký tự nào:
  // + => cho 1 hoặc nhiều lần xuất hiện (điều này đảm bảo chiều dài str> 3)
  // \ 1 => khớp với khớp đã lưu trước đó.
  // \ 2 tìm kiếm mục phù hợp được lưu trữ 2 phiên bản trước
  // \ 3 tìm kiếm mục phù hợp được lưu trữ 3 phiên bản trước, v.v.

  // $ đảm bảo rằng mục phù hợp nằm ở cuối chuỗi

  let re = / ^ ([ aeiou ]). + \ 1 $ /;
  // let re = /[a-z]/g;
  console.log(re.test(str));
}

regexVar("quochuy")