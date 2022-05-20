// 條件陳述式 condirtion Statement
const sweet = true;
const salty = false;

let result = sweet ? "甜" : "跟你一樣甜";
// console.log(result);

let funcResult = () => {
  if (sweet) {
    return "甜";
  } else {
    return "不甜";
  }
};
console.log(funcResult());
