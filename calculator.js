function calculatePrice(price, membership = "normal", coupon = null) {
  const priceAfterPriceDiscount = applyPriceDiscount(price);
  const priceAfterMembershipDiscount = applyMembershipDiscount(
    priceAfterPriceDiscount,
    membership
  );

  const priceAfterCouponDiscount = applyCouponDiscount(
    priceAfterMembershipDiscount,
    coupon
  );

  const finalPrice = applyMinimumPriceLimit(priceAfterCouponDiscount, price);

  return finalPrice;
}

function applyPriceDiscount(price) {
  if (price >= 50000 && price < 100000) {
    return price * 0.95;
  } else if (price >= 100000 && price < 200000) {
    return price * 0.9;
  } else if (price >= 200000) {
    return price * 0.8;
  } else {
    return price;
  }
}

function applyMembershipDiscount(price, membership) {
  if (membership === "normal") {
    return price;
  } else if (membership === "silver") {
    return price * 0.98;
  } else if (membership === "gold") {
    return price * 0.95;
  } else if (membership === "vip") {
    return price * 0.9;
  }
}

function applyCouponDiscount(price, coupon) {
  if (!coupon) {
    return price;
  } else if (coupon.type === "fixed") {
    return price - coupon.amount;
  } else if (coupon.type === "percentage") {
    return price * (1 - coupon.amount / 100);
  }
}

function applyMinimumPriceLimit(discountPrice, originalPrice) {
  return Math.max(discountPrice, originalPrice * 0.5);
}

module.exports = { calculatePrice };
