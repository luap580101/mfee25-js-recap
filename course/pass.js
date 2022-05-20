// pass by value 傳值
let x = 1;
let y = x;
y++;
// console.log(x);
// console.log(y);

// pass by Reference 傳址
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

let car1 = {
  color: "red",
};
let car2 = car1;
car2.color = "blue";
console.log(car1.color);
console.log(car2.color);
// car2 = {
//   brand: "BMW",
// };
// console.log(car2)
// // car1.color = "blue";
// // car2.color = "blue";
// console.log(car1.color);
// console.log(car2.color);

let car3 = { ...car1, brand: "Ford" };
console.log(car3);
