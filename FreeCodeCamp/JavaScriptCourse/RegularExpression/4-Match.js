//Phan biet match-test
/**
 * match thi kiem tra chuoi khop voi cac RE voi cac co nhu g,i
 * Ex: "coding".match(/[abc]/gi)
 * test thi kiem tra ket qua phu hop trong 1 chuoi
 * Ex:  /u/i.test("Student")
 */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);

//Find the word using match with global and ignoreCase 
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line