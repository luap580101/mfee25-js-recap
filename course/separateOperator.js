let lowerCase = ["a", "b", "c"];
let upperCase = ["D", "E"];
let string = "Hello";

let all = [1, 2, ...lowerCase, ...upperCase, string];
// let all = [1, 2, ...lowerCase, ...upperCase, ...string];
console.log(all);
