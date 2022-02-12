let myWord = "ThaoAnh";
//Khop a-z va 0-9
let myRegex = /[a-z0-9]/gi;
//Khop cac ky tu khac aeoui
let myRegex2 = /[^aeoui0-9]/gi;
//Khop voi 1 ky tu xuat hien nhieu lan
let myRegex3 = /a+/gi;
//Khop ky tu o dau va cuoi A*a
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
//Luoi bieng: tim cac ki tu gan nhat
let myRegex4 = /t[.*?a]/gi;
//Khop va khac tat ca cac doi so A-Z a-z 0-9
let myRegex5 = /[a-zA-Z0-9]/gi;
let myRegex6 = /[^a-zA-Z0-9]/gi;
// \W tuong tu nhu [^A-Z a-z 0-9] or \w tuong tu nhu [A-Z a-z 0-9]
let myRegex7 = /\W/g;
//Tim kiem cac chu so trong 1 chuoi \d va \D nhu tren
let myRegex8 = /\d/g;
let result = myWord.match(myRegex);
