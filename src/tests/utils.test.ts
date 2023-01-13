import { getProductById, generateRangeByProperty } from '../components/utils/utils';
import { FullProductProps } from '../common/types';

const products: FullProductProps[] = [
  {
    id: '1',
    title: 'Holy Bible',
    annotation: 'The Holy Bible',
    category: 'Bible',
    author: 'Donald Trump',
    price: 100,
    rating: 5,
    stock: 100,
    images: ['https://picsum.photos/200/300'],
  },
  {
    id: '2',
    title: 'Holy Bible 2',
    annotation: 'The Holy Bible 2',
    category: 'Bible',
    author: "God's Son",
    price: 200,
    rating: 12,
    stock: 100,
    images: ['https://picsum.photos/200/300'],
  },
  {
    id: '3',
    title: 'Holy Bible 3',
    annotation: 'The Holy Bible 3',
    category: 'Bible 1',
    author: 'Pope',
    price: 400,
    rating: 1,
    stock: 64,
    images: ['https://picsum.photos/200/300'],
  },
];

describe('Get product by id', () => {
  test('get product by normal id', () => {
    const testProducts: FullProductProps[] = [...products.map((product) => ({ ...product }))];
    const id = '2';
    const expected = products[1].title;
    expect(getProductById(id, testProducts).title).toEqual(expected);
  });

  test('get product by incorrect id', () => {
    const testProducts: FullProductProps[] = [...products.map((product) => ({ ...product }))];
    const id = 'sdsd';
    const expected = undefined;
    expect(getProductById(id, testProducts)?.title).toEqual(expected);
  });
});

describe('Get range by property', () => {
  test('get range by normal property', () => {
    const testProducts: FullProductProps[] = [...products.map((product) => ({ ...product }))];
    const property = 'price';
    const expected = JSON.stringify({ min: 100, max: 400 });
    const result = generateRangeByProperty(testProducts, property);
    expect(JSON.stringify(result)).toEqual(expected);
  });

  test('get range by incorrect property', () => {
    const testProducts: FullProductProps[] = [...products.map((product) => ({ ...product }))];
    const property = 'sdsd';
    const expected = JSON.stringify({});
    const result = generateRangeByProperty(testProducts, property);
    expect(JSON.stringify(result)).toEqual(expected);
  });
});
