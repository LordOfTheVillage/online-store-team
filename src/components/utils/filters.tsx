import { FullProductProps } from 'src/common/types';

export const FILTERS = {
  include: (field: string) => (name: string[], object: FullProductProps) => {
    const string = object[field as keyof FullProductProps] as string;
    return string.toLowerCase().includes(name[0].trim().toLowerCase());
  },
  range: (field: string) => (range: Record<string, number>, object: FullProductProps) => {
    const number = object[field as keyof FullProductProps] as number;
    return (range['min'] === 0 ? true : number >= range['min']) && (range['max'] === 0 ? true : number <= range['max']);
  },
  select: (field: string) => (name: string[], object: FullProductProps) => {
    const string = object[field as keyof FullProductProps] as string;
    return name.includes(string);
  },
};

export const FILTERS_CONFIG = {
  title: FILTERS.include('title'),
  author: FILTERS.select('author'),
  category: FILTERS.select('category'),
  price: FILTERS.range('price'),
  rating: FILTERS.range('rating'),
};
