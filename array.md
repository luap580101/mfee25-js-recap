animal = { id: "a1", en: "cat", cn: "貓", num: 30 }

...animal = id: "a1", en: "cat", cn: "貓", num: 30

{...animal} = ({ id: "a1", en: "cat", cn: "貓", num: 30 })

假如有一個object 希望在後面加上 size 屬性
{ id: "a1", en: "cat", cn: "貓", num: 30 }
很簡單就直接加
{ id: "a1", en: "cat", cn: "貓", num: 30, size = small }

同理 第五行
{...animal, size = small}