import { CartProducts } from 'src/common/types';
import { getAmount, getTotalPrice } from '../components/utils/products';

const products: CartProducts[] = [
  {
    count: 5,
    value: {
      id: '1',
      title: 'Holy Bible 1',
      annotation: 'The Holy Bible 1',
      category: 'Bible',
      author: 'God',
      price: 100,
      rating: 5,
      stock: 100,
      images: ['https://picsum.photos/200/300'],
    },
  },
  {
    count: 2,
    value: {
      id: '2',
      title: 'Holy Bible 2',
      annotation: 'The Holy Bible 2',
      category: 'Bible',
      author: 'God',
      price: 200,
      rating: 12,
      stock: 100,
      images: ['https://picsum.photos/200/300'],
    },
  },
  {
    count: 3,
    value: {
      id: '2',
      title: 'Holy Bible 3',
      annotation: 'The Holy Bible 3',
      category: 'Bible 1',
      author: 'God 1',
      price: 400,
      rating: 1,
      stock: 64,
      images: ['https://picsum.photos/200/300'],
    },
  },
];

describe('Get total price', () => {
  test('simple price sum', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    const expected = 2100;
    expect(getTotalPrice(testProducts)).toBe(expected);
  });

  test('simple price sum with count = 0', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    testProducts[0].count = 0;
    const expected = 1600;
    expect(getTotalPrice(testProducts)).toBe(expected);
  });

  test('simple price sum with count < 0', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    testProducts[0].count = -1;
    const expected = 1500;
    expect(getTotalPrice(testProducts)).toBe(expected);
  });

  test('simple price sum with price < 0', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    testProducts[0].value.price = -100;
    const expected = 1100;
    expect(getTotalPrice(testProducts)).toBe(expected);
  });
});

describe('get amount', () => {
  test('simple amount', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    const expected = 10;
    expect(getAmount(testProducts)).toBe(expected);
  });

  test('simple amount with count = 0', () => {
    const testProducts = [...products.map((product) => ({ ...product }))];
    testProducts[0].count = -1;
    const expected = 4;
    expect(getAmount(testProducts)).toBe(expected);
  });
});
