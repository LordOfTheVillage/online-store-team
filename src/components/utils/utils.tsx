import { FullProductProps, PropertyList } from 'src/common/types';

export const getProductById = (id: string, products: FullProductProps[]): FullProductProps => {
  return products.find((e) => e.id === id) as FullProductProps;
};

export const generateListByProperty = (source: FullProductProps[], subSource: FullProductProps[], property: string) => {
  let list: PropertyList[] = [];
  [...source].forEach((element: FullProductProps) => {
    const title = element[property as keyof typeof element] as string;
    const index = list.findIndex((item) => item.title === title);
    if (index !== -1) return (list[index].allAmount += 1);

    const count = subSource.reduce(
      (c: number, e: FullProductProps) => (e[property as keyof typeof e] === title ? ++c : c),
      0
    );
    return list.push({ title, allAmount: 1, realAmount: count });
  });

  return list;
};

export const generateRangeByProperty = (source: FullProductProps[], property: string): Record<string, number> => {
  const startItem = source[0] as FullProductProps;
  const startValue = startItem[property as keyof typeof startItem] as number;

  const range: Record<string, number> = { min: startValue, max: startValue };

  source.forEach((element) => {
    const value = element[property as keyof typeof element] as number;
    if (value < range.min) range.min = value;
    if (value > range.max) range.max = value;
  });

  return range;
};

export const getStringByProperties = (object: FullProductProps, properties: string[]) => {
  return Object.keys(object)
    .map((key: string) => {
      if (!properties.some((p) => p === key)) return '';
      const e = object[key as keyof typeof object];
      if (Array.isArray(e)) return e.join('');
      if (typeof e === 'string') return e;
      if (typeof e === 'number') return `${e}`;
      return Object.values(e).join('');
    })
    .join(' ');
};

export const getRandomString = (): string => Math.random().toString(36).substring(2);

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
