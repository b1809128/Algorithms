//Find another word can be run, fun, under having "un"
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);

//Tim kiem khoang trang \s
let spaceRegex = /\s/g;

//Tim kiem khong co khoang trang
let spaceRegex2 = /[^ \r\t\f\n\v]/g;
let spaceRegex3 = /\S/g;
