var a = 10;
function test() {
  console.log(a);
  let a; //隱藏起來結果不一樣
}
test(); //Cannot access 'a' before initialization
