import { CartProducts } from 'src/common/types';
import { getTotalPrice } from '../components/utils/products';

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
    const expected = 2100;
    expect(getTotalPrice(products)).toBe(expected);
  });
});
