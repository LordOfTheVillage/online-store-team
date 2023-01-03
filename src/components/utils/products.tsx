import { CartProducts } from 'src/common/types';

export const getTotalPrice = (products: CartProducts[]): number => {
  let count = 0;
  products.forEach((e) => (count += e.value.price * e.count));
  return +count.toFixed(2);
};

export const getAmount = (products: CartProducts[]): number => {
  let count = 0;
  products.forEach((e) => (count += e.count));
  return count;
};
