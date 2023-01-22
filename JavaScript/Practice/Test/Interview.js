const array = ['a','b','c','d','e'];

// array.push("end");
// array.unshift("start");
/** in ES6 */
const newArray = ["start" ,...array,"end"];

console.log(newArray);