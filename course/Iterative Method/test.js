let animals = [
    { id: "a1", en: "cat", cn: "貓", num: 20 },
    { id: "a2", en: "dog", cn: "狗", num: 10 },
    { id: "a3", en: "mouse", cn: "老鼠", num: 50 },
    { id: "a4", en: "hotDog", cn: "熱狗", num: 2 },
  ];
  
  let animalFindIndex = animals.findIndex((value, index) => {
    return value.num > 90;
    //   只會回傳位置
  });
  console.log(animalFindIndex);
  
  let animalDel = animals.filter((value, index) => {
    return index !== animalFindIndex;
    // 不要第一筆了, 間接刪掉第一筆
  });
  
  console.log(animalDel);
  