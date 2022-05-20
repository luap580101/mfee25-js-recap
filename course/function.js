// 宣告 function 函數陳述式
function add(a, b) {
  return a + b;
}

let result = add(1, 2);
console.log(result);

// 函數運算式 Function Expression
let subTract = function (a, b) {
  return a - b;
};

// 箭頭函式
let multiply = (a, b) => {
  return a * b;
};
let multiply2 = (a, b) => a * b; //自帶return

let print = (str) => console.log(str);
// ((str) => console.log(str))("test")

(function (a, b) {
  return a / b;
})(6, 2);

((a, b) => {
  return a / b;
})(4, 2);
