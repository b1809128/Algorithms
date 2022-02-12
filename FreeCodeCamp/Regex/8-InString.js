let ohStr = "Ohhh no";
//Find space in string in [3,6]
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
