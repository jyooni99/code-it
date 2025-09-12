const { calculateDiscountedPrice } = require("./calculator");

test("20% 할인이 적용된다.", () => {
  expect(calculateDiscountedPrice(2000, 20)).toBe(1600);
});

test("유효한 가격에서 할인을 적용하면 0보다 큰 값을 반환한다", () => {
  expect(calculateDiscountedPrice(2000, 20)).toBeGreaterThan(0);
});

test("유효한 가격에서 할인을 적용하면 기본 가격보다 작다", () => {
  expect(calculateDiscountedPrice(2000, 20)).toBeLessThan(2000);
});

test("유효하지 않은 할인율을 입력하면 오류가 발생한다", () => {
  expect(() => calculateDiscountedPrice(2000, -20)).toThrow(); // throw Error의 경우 래핑을 해야 함
});
