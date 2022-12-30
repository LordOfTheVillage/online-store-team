import { FullProductProps } from 'src/common/types';

export const getProductById = (id: string, products: FullProductProps[]): FullProductProps => {
  return products.find((e) => e.id === id);
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
