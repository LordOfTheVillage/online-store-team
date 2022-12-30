import { FullProductProps } from 'src/common/types';

export const SORTS_CONFIG = {
  'Сначала дешевые': (left: FullProductProps, right: FullProductProps) => left.price - right.price,
  'Сначала дорогие': (left: FullProductProps, right: FullProductProps) => right.price - left.price,
  'Сначала популярные': (left: FullProductProps, right: FullProductProps) => right.rating - left.rating,
  'Сначала непопулярные': (left: FullProductProps, right: FullProductProps) => left.rating - right.rating,
};
