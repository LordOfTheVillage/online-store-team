import { FullProductProps, IFilters } from 'src/common/types';

export const getProductById = (id: string, products: FullProductProps[]): FullProductProps => {
  for (const product of products) {
    if (product.id === id) return product;
  }
};

export const generateListByProperty = (array: FullProductProps[], property: string) => {
  let list: string[] = [];
  [...array].forEach((element: FullProductProps) => {
    const item = element[property as keyof typeof element] as string;
    return list.indexOf(item) !== -1 ? null : list.push(item);
  });

  return list.sort();
};

export const getRandomString = (): string => Math.random().toString(36).substring(2);

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const SORTINGS_CONFIG = {
  'Сначала дешевые': (left: FullProductProps, right: FullProductProps) => left.price - right.price,
  'Сначала дорогие': (left: FullProductProps, right: FullProductProps) => right.price - left.price,
  'Сначала популярные': (left: FullProductProps, right: FullProductProps) => right.stock - left.stock,
};

export const SELECT_FILTERS_CONFIG: IFilters = {
  author: (author: string[], sec: string) => {
    return author.includes(sec);
  },
  category: (category: string[], sec: string) => {
    return category.includes(sec);
  },
  // title: (title: string, src: string) => {
  //   return src.toLowerCase().includes(title.trim().toLowerCase());
  // },
  // price: (range: Record<string, string | number>, src: number) => {
  //   return (
  //     (range['min'] === 0 || range['min'] === '' ? true : src >= range['min']) &&
  //     (range['max'] === 0 || range['max'] === '' ? true : src <= range['max'])
  //   );
  // },
};

export const RANGE_FILTERS_CONFIG = {
  price: (range: Record<string, number>, src: number) => {
    return (range['min'] === 0 ? true : src >= range['min']) && (range['max'] === 0 ? true : src <= range['max']);
  },
};
