const menu = [
  { name: "커피", price: 2500 },
  { name: "도너츠", price: 3000 },
  { name: "타르트", price: 3500 },
];

// 지양
menu.map((v, i) => {
  v.id = i + 1;
  return v;
});

// 지향
menu.map((v, i) => {
  return { ...v, id: i + 1 };
});

const starbucks = [
  { name: "americano", shots: 2, price: 4000 },
  { name: "latte", shots: 2, price: 5000 },
  { name: "mint", shots: 0, price: 5500 },
];

// 각각에 no:0 ~ 2 추가해주기
// shots 하나씩 늘려주고, 가격은 1000원을 더해서
// 새로운 리스트 만들기!
starbucks.map((v, i) => {
  return { ...v, no: i, shots: v.shots + 1, price: v.price + 1000 };
});
