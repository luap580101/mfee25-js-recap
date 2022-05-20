// console.log(a);
var a = 1;
// var的提升, 會讓 a 初始化為 undefined

// var a;
// console.log(a);
// a = 1;

b();
function b() {
  console.log("b");
}
// function的提升, JS 會讓宣告提升到最上面

