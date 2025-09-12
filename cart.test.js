const { filterCartItems } = require("./cart");

const cart = [
  { name: "노트북", price: 1000 },
  { name: "마우스", price: 50 },
  { name: "키보드", price: 80 },
];

test("장바구니에 노트북이 있다", () => {
  expect(filterCartItems(cart, "노트북")).toContain(cart[0]);
});

test("장바구니에 없는 아이템을 찾을 수 없다", () => {
  expect(filterCartItems(cart, "휴대폰")).not.toContain(cart[0]);
});

test("장바구니에 정확한 아이템 객체만 반환된다.", () => {
  expect(filterCartItems(cart, "마우스")).toEqual([{ name: "마우스", price: 50 }]);
});
