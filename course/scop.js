// Function Scope
function scope() {
  var varFunc = 1;
  let letFunc = 2;
}
// console.log(varFunc); //varFunc is not defined
// console.log(letFunc); //letFunc is not defined

if (true) {
  var varBlock = 2;
  let letBlock = 2;
}
// console.log(varBlock);
// console.log(letBlock); //letBlock is not defined
