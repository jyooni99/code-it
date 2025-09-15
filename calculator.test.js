const { calculatePrice } = require("./calculator");

describe("가격 할인 계산기 테스트", () => {
  describe("상품 가격에 따른 금액 할인 테스트", () => {
    test("5만원 미만일 경우 할인 미적용", () => {
      const price = 20000;
      const expected = 20000;
      const result = calculatePrice(price);
      expect(result).toBe(expected);
    });

    test("5만원 이상 10만원 미만 결제 시 5% 할인", () => {
      const price = 50000;
      const expected = 47500;
      const result = calculatePrice(price);
      expect(result).toBe(expected);
    });

    test("10만원 이상 20만원 미만 결제 시 10% 할인", () => {
      const price = 100000;
      const expected = 90000;
      const result = calculatePrice(price);
      expect(result).toBe(expected);
    });

    test("20만원 이상 결제 시 20% 할인", () => {
      const price = 200000;
      const expected = 160000;
      const result = calculatePrice(price);
      expect(result).toBe(expected);
    });
  });

  describe("회원 등급에 따른 금액 할인 테스트", () => {
    test("일반 회원일 경우 추가 할인 없음", () => {
      const price = 50000;
      const membership = "normal";
      const expected = 47500;
      const result = calculatePrice(price, membership);
      expect(result).toBe(expected);
    });

    test("실버 등급일 경우 2% 추가 할인", () => {
      const price = 50000;
      const membership = "silver";
      const expected = 46550;
      const result = calculatePrice(price, membership);
      expect(result).toBe(expected);
    });

    test("골드 등급일 경우 5% 추가 할인", () => {
      const price = 50000;
      const membership = "gold";
      const expected = 45125;
      const result = calculatePrice(price, membership);
      expect(result).toBe(expected);
    });

    test("VIP 등급일 경우 10% 추가 할인", () => {
      const price = 50000;
      const membership = "vip";
      const expected = 42750;
      const result = calculatePrice(price, membership);
      expect(result).toBe(expected);
    });
  });

  describe("쿠폰 할인 테스트", () => {
    test("정액 쿠폰 테스트", () => {
      const price = 50000;
      const coupon = { type: "fixed", amount: 5000 };
      const membership = "normal";
      const expected = 42500;
      const result = calculatePrice(price, membership, coupon);

      expect(result).toBe(expected);
    });

    test("비율 쿠폰 테스트", () => {
      const price = 50000;
      const coupon = { type: "percentage", amount: 10 };
      const membership = "normal";
      const expected = 42750;
      const result = calculatePrice(price, membership, coupon);

      expect(result).toBe(expected);
    });
  });

  describe("할인 가격 제한 테스트", () => {
    test("최종 가격이 원래 가격의 50% 이하일 경우, 50%까지만 할인", () => {
      const price = 100000;
      const membership = "vip";
      const coupon = { type: "percentage", amount: 50 };
      const result = calculatePrice(price, membership, coupon);
      expect(result).toBe(50000);
    });
  });
});
