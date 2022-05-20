// find 只會找到第一筆
let animals = [
  { id: "a1", en: "cat", cn: "貓", num: 20 },
  { id: "a2", en: "dog", cn: "狗", num: 10 },
  { id: "a3", en: "mouse", cn: "老鼠", num: 50 },
  { id: "a4", en: "hotDog", cn: "熱狗", num: 2 },
];

let animalFind = animals.find((value, index) => {
  return value.num > 15;
});
console.log(animalFind);
