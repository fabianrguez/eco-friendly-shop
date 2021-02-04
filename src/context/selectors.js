export const getCartItemsTotal = cart => cart.length;

export const getCartTotalPrice = cart =>
  cart.reduce((acc, item) => (acc += item.price), 0);
