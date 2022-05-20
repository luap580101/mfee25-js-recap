// 解構賦值 Destructuring Assignment
let animals = ["鼠", "牛", "虎", "兔", "龍", "蛇"];
let [mouse, , tiger, rabbit] = animals;

// console.log(tiger);

// 物件
let countries = {
  taiwan: "台灣",
  japan: "日本",
  china: "中國",
  corea: "韓國", //韓國故意拼錯 korea
};
// let { japan, china, taiwan, corea } = countries;
// console.log(taiwan);
// console.log(japan);
// console.log(china);
// console.log(corea);

let { japan, china, taiwan, corea: korea } = countries;
// console.log(corea); // undefinded
console.log(korea);
