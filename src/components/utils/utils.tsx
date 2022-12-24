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

export const generateRangeByProperty = (array: FullProductProps[], property: string): Record<string, number> => {
  const startItem = array[0] as FullProductProps;
  const startValue = startItem[property as keyof typeof startItem] as number;

  const range: Record<string, number> = { min: startValue, max: startValue };

  array.forEach((element) => {
    const value = element[property as keyof typeof element] as number;
    if (value < range.min) range.min = value;
    if (value > range.max) range.max = value;
  });

  return range;
};

export const getRandomString = (): string => Math.random().toString(36).substring(2);

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const SORTINGS_CONFIG = {
  'Сначала дешевые': (left: FullProductProps, right: FullProductProps) => left.price - right.price,
  'Сначала дорогие': (left: FullProductProps, right: FullProductProps) => right.price - left.price,
  'Сначала популярные': (left: FullProductProps, right: FullProductProps) => right.rating - left.rating,
  'Сначала непопулярные': (left: FullProductProps, right: FullProductProps) => left.rating - right.rating,
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
};

export const SEARCH_FILTERS_CONFIG = {
  title: (title: string, src: string) => {
    return src.toLowerCase().includes(title.trim().toLowerCase());
  },
};

export const RANGE_FILTERS_CONFIG = {
  price: (range: Record<string, number>, src: number) => {
    return (range['min'] === 0 ? true : src >= range['min']) && (range['max'] === 0 ? true : src <= range['max']);
  },
  rating: (range: Record<string, number>, src: number) => {
    return (range['min'] === 0 ? true : src >= range['min']) && (range['max'] === 0 ? true : src <= range['max']);
  },
};

// export const FILTERS_CONFIG = {
//   include: (list: string[], filed: string) => list.includes(filed),
//   range: (range: Record<string, number>, src: number) => {
//     return (range['min'] === 0 ? true : src >= range['min']) && (range['max'] === 0 ? true : src <= range['max']);
//   },
// };

// export const FILTERS = {
//   includes: (list: string[], field: string) => (o: FullProductProps) => list.includes(o[field as keyof typeof o]),
//   range: (min: number, max: number, field: string) => (o: FullProductProps) => o[field] >= min && o[field] <= max,
//   search: (search, field) => (o: FullProductProps) => search.toLowerCase().contains(o[field].toLowerCase()),
// };
